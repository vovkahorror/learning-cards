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

export const authMeTC = createAsyncThunk('auth/authMe', async (_, { dispatch }) => {
  try {
    const res = await authAPI.me()

    dispatch(setIsLoggedIn(true))
    dispatch(setUserData(res.data))
  } catch (e) {
    // errorUtils(e as AxiosError, dispatch)
  } finally {
    dispatch(setIsInitialized(true))
  }
})

export const RegisterTC = createAsyncThunk(
  'auth/register',
  async (arg: { email: string; password: string }, { dispatch }) => {
    dispatch(setStatusLoading('global'))
    try {
      await authAPI.register(arg.email, arg.password)
      dispatch(setRegisterSuccess(true))
      dispatch(setInfoSnackbar({ text: 'Registration is success', variant: 'success' }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const loginTC = createAsyncThunk(
  'auth/login',
  async (arg: { email: string; password: string; rememberMe: boolean }, { dispatch }) => {
    dispatch(setStatusLoading('global'))
    try {
      const res = await authAPI.login(arg.email, arg.password, arg.rememberMe)

      dispatch(setIsLoggedIn(true))
      dispatch(setUserData(res.data))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
      // выключаем крутилку только при ошибке ( чтоб небыло дерганья при логинизации)
      // dispatch(setStatusLoading('idle'))
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const logoutTC = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  dispatch(setStatusLoading('global'))
  try {
    await authAPI.logout()

    dispatch(setUserData({} as UserType))
    dispatch(setIsLoggedIn(false))
  } catch (e) {
    errorUtils(e as AxiosError, dispatch)
  } finally {
    dispatch(setStatusLoading('idle'))
  }
})

export const recoveryPasswordTC = createAsyncThunk(
  'auth/recoveryPassword',
  async (email: string, { dispatch }) => {
    const payload: RequestRecoveryType = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: emailMassage,
    }

    dispatch(setStatusLoading('global'))
    try {
      const res = await authAPI.recoveryPassword(payload)

      dispatch(setUserEmail(email))
      dispatch(setRecovery(true))
      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const setNewPasswordTC = createAsyncThunk(
  'auth/setNewPassword',
  async (data: RequestNewPasswordType, { dispatch }) => {
    dispatch(setStatusLoading('global'))
    try {
      const res = await authAPI.setNewPassword(data)

      dispatch(setNewPassword(true))
      dispatch(setInfoSnackbar({ text: res.data.info, variant: 'success' }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const updateUserName = createAsyncThunk(
  'auth/updateUserName',
  async (arg: { name: string }, { dispatch }) => {
    dispatch(setStatusLoading('global'))
    try {
      const res = await authAPI.updateName(arg.name)

      dispatch(setUserData(res.data.updatedUser))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

const authSlice = createSlice({
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
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload
    },
    setNewPassword: (state, action: PayloadAction<boolean>) => {
      state.isSetNewPassword = action.payload
    },
    setUserData(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload
    },
    setRegisterSuccess(state, action: PayloadAction<boolean>) {
      state.registerSuccess = action.payload
    },
  },
})

export const {
  setRecovery,
  setUserEmail,
  setNewPassword,
  setRegisterSuccess,
  setUserData,
  setIsLoggedIn,
} = authSlice.actions
export const authReducer = authSlice.reducer
