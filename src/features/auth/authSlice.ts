import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { authAPI } from 'features/auth/authAPI'

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

const authSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {},
})

export const authReducer = authSlice.reducer
