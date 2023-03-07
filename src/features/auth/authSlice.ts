import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

import { setInfoSnackbar, setStatusLoading } from 'app/appSlice'
import { errorUtils } from 'common/utils/error-utils'
import {
  authAPI,
  RequestNewPasswordType,
  RequestRecoveryType,
  UserType,
} from 'features/auth/authAPI'
import { emailMassage } from 'features/auth/RecoveryPassword/InfoMessage/EmailMassage'

type InitialStateType = {
  isSetRecovery: boolean
  userEmail: string
  isSetNewPassword: boolean
  user: UserType
}

export const RegisterTC = createAsyncThunk(
  'auth/register',
  async (arg: { email: string; password: string }, thunkAPI) => {
    // thunkAPI.dispatch(setLoadingAC({isLoading: true}))
    try {
      await authAPI.register(arg.email, arg.password)

      return
    } catch (error) {
      // errorUtils(error as AxiosError, thunkAPI.dispatch)

      return thunkAPI.rejectWithValue({})
    } finally {
      // thunkAPI.dispatch(setLoadingAC({isLoading: false}))
    }
  }
)

export const recoveryPasswordTC = createAsyncThunk(
  'auth/recoveryPasswordTC',
  async (email: string, { dispatch }) => {
    const payload: RequestRecoveryType = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: emailMassage,
    }

    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.recoveryPassword(payload)

      dispatch(setUserEmail(email))
      dispatch(setRecovery(true))
      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))
    } catch (e: any) {
      errorUtils(e, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const setNewPasswordTC = createAsyncThunk(
  'auth/setNewPasswordTC',
  async (data: RequestNewPasswordType, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.setNewPassword(data)

      dispatch(setNewPassword(true))
      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))
    } catch (e: any) {
      console.log(e)
      errorUtils(e, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isSetRecovery: false,
    userEmail: '',
    isSetNewPassword: false,
  } as InitialStateType,
  reducers: {
    setRecovery: (state, action: PayloadAction<boolean>) => {
      state.isSetRecovery = action.payload
    },
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload
    },
    setNewPassword: (state, action: PayloadAction<boolean>) => {
      state.isSetNewPassword = action.payload
    },
    setUserData(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
  },
})

export const { setRecovery, setUserEmail, setNewPassword } = authSlice.actions
export const authReducer = authSlice.reducer

export const getUserData =
  (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
      const res = await authAPI.login(email, password, rememberMe)

      dispatch(authSlice.actions.setUserData(res.data))
    } catch (e) {
      //in progress...
    }
  }
