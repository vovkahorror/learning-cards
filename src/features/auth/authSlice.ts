import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setInfoSnackbar, setIsInitialized, setStatusLoading } from 'app/appSlice'
import { errorUtils } from 'common/utils/error-utils'
import {
  authAPI,
  RequestNewPasswordType,
  RequestRecoveryType,
  UserType,
} from 'features/auth/authAPI'
import { emailMassage } from 'features/auth/RecoveryPassword/InfoMessage/emailMassage'

export type AuthInitialStateType = ReturnType<typeof authSlice.getInitialState>

export const authMeTC = createAsyncThunk(
  'auth/authMe',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const res = await authAPI.me()

      return res.data
    } catch (e) {
      return rejectWithValue(null)
    } finally {
      dispatch(setIsInitialized(true))
    }
  }
)

export const RegisterTC = createAsyncThunk(
  'auth/register',
  async (arg: { email: string; password: string }, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      await authAPI.register(arg.email, arg.password)
      dispatch(setRegisterSuccess(true))
      dispatch(setInfoSnackbar({ text: 'Registration is success', variant: 'success' }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const loginTC = createAsyncThunk(
  'auth/login',
  async (
    arg: { email: string; password: string; rememberMe: boolean },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.login(arg.email, arg.password, arg.rememberMe)

      return res.data
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
      // выключаем крутилку только при ошибке ( чтоб небыло дерганья при логинизации)
      dispatch(setStatusLoading(false))

      return rejectWithValue(null)
    }
  }
)

export const logoutTC = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch, rejectWithValue }) => {
    dispatch(setStatusLoading(true))
    try {
      await authAPI.logout()

      return {} as UserType
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)

      return rejectWithValue(null)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const recoveryPasswordTC = createAsyncThunk(
  'auth/recoveryPassword',
  async (email: string, { dispatch, rejectWithValue }) => {
    const payload: RequestRecoveryType = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: emailMassage,
    }

    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.recoveryPassword(payload)

      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))

      return email
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)

      return rejectWithValue(null)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const setNewPasswordTC = createAsyncThunk(
  'auth/setNewPassword',
  async (arg: RequestNewPasswordType, { dispatch, rejectWithValue }) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.setNewPassword(arg)

      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))

      return true
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)

      return rejectWithValue(null)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const updateUserNameTC = createAsyncThunk(
  'auth/updateUserName',
  async (arg: { name: string }, { dispatch, rejectWithValue }) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await authAPI.updateName(arg.name)

      return res.data.updatedUser
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)

      return rejectWithValue(null)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {} as UserType,
    isSetRecovery: false,
    userEmail: '',
    isSetNewPassword: false,
    registerSuccess: false,
    isLoggedIn: false,
  },
  reducers: {
    setRecovery: (state, action: PayloadAction<boolean>) => {
      state.isSetRecovery = action.payload
    },
    setRegisterSuccess(state, action: PayloadAction<boolean>) {
      state.registerSuccess = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setNewPasswordTC.fulfilled, (state, action) => {
        state.isSetNewPassword = action.payload
      })
      .addCase(recoveryPasswordTC.fulfilled, (state, action) => {
        state.userEmail = action.payload
        state.isSetRecovery = true
      })
      .addCase(loginTC.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
      })
      .addCase(logoutTC.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = false
      })
      .addCase(authMeTC.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
      })
      .addCase(updateUserNameTC.fulfilled, (state, action) => {
        state.user = action.payload
      })
  },
})

export const { setRecovery, setRegisterSuccess } = authSlice.actions
export const authReducer = authSlice.reducer
