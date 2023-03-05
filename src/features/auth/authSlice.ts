import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { authAPI, RequestNewPasswordType, RequestRecoveryType } from 'features/auth/authAPI'

type InitialStateType = {
  isSetRecovery: boolean
  userEmail: string
  isSetNewPassword: boolean
}

export const recoveryPasswordTC = createAsyncThunk(
  'auth/recoveryPasswordTC',
  async (email: string, { dispatch }) => {
    const payload: RequestRecoveryType = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div style="background-color: #82ddfc; padding: 15px">password recovery link: 
                <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`,
    }

    try {
      const res = await authAPI.recoveryPassword(payload)

      dispatch(setUserEmail(email))
      dispatch(setRecovery(true))
    } catch (e) {
      if (axios.isAxiosError<{ error: string }>(e)) {
        const error = e.response?.data ? e.response.data.error : e.message
      }
    }
  }
)

export const setNewPasswordTC = createAsyncThunk(
  'auth/setNewPasswordTC',
  async (data: RequestNewPasswordType, { dispatch }) => {
    try {
      const res = await authAPI.setNewPassword(data)

      dispatch(setNewPassword(true))
    } catch (e) {
      if (axios.isAxiosError<{ error: string }>(e)) {
        const error = e.response?.data ? e.response.data.error : e.message
      }
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
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
  },
})

export const { setRecovery, setUserEmail, setNewPassword } = authSlice.actions
export const authReducer = authSlice.reducer
