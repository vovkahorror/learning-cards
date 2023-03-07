import { createAsyncThunk, createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setInfoMessage, setStatusLoading } from 'app/appSlice'
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
  registerSuccess: boolean
}

export const RegisterTC = createAsyncThunk(
  'auth/register',
  async (arg: { email: string; password: string }, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.register(arg.email, arg.password)

      dispatch(setRegisterSuccess(true))
      dispatch(setInfoMessage(res.data.info))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
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

      console.log(res)

      dispatch(setUserEmail(email))
      dispatch(setRecovery(true))
      dispatch(setInfoMessage(res.data.info))
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
      // const res = await authAPI.setNewPassword(data)

      dispatch(setNewPassword(true))
    } catch (e: any) {
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
    registerSuccess: false,
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
    setRegisterSuccess(state, action: PayloadAction<boolean>) {
      state.registerSuccess = action.payload
    },
  },
})

export const { setRecovery, setUserEmail, setNewPassword, setRegisterSuccess } = authSlice.actions
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
