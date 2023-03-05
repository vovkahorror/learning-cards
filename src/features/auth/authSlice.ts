import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { authAPI, RequestRecoveryType } from 'features/auth/authAPI'

type InitialStateType = {
  isSetRecovery: boolean
}

export const recoveryPasswordTC = createAsyncThunk(
  'auth/recoveryPasswordTC',
  async (email: string, { dispatch }) => {
    const payload: RequestRecoveryType = {
      email,
      from: 'test-front-admin <ai73a@yandex.by>',
      message: `<div style="background-color: #6a8fe5; padding: 15px">password recovery link: 
                <a href='http://localhost:3000/#/set-new-password/$token$'>link</a></div>`,
    }

    try {
      const res = await authAPI.recoveryPassword(payload)

      dispatch(setRecovery(true))
    } catch (e) {
      if (axios.isAxiosError<{ error: string }>(e)) {
        console.log(e)
        const error = e.response?.data ? e.response.data.error : e.message
      }
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isSetRecovery: false,
  } as InitialStateType,
  reducers: {
    setRecovery: (state, action: PayloadAction<boolean>) => {
      state.isSetRecovery = action.payload
    },
  },
})

export const { setRecovery } = authSlice.actions
export const authReducer = authSlice.reducer
