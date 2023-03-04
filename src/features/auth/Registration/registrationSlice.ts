import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const registrationTC = createAsyncThunk(
  'auth/registration',
  async (arg: { email: string; password: string }, thunkAPI) => {
    // thunkAPI.dispatch(setLoadingAC({isLoading: true}))
    try {
      // await authAPI.register(arg.email, arg.password)
      return
    } catch (error) {
      // errorUtils(error as AxiosError, thunkAPI.dispatch)
      // return thunkAPI.rejectWithValue({isLoggedIn: false})
    } finally {
      // thunkAPI.dispatch(setLoadingAC({isLoading: false}))
    }
  }
)

const registrationSlice = createSlice({
  name: 'registration',
  initialState: {},
  reducers: {},
  extraReducers: {},
})

export const registrationReducer = registrationSlice.reducer
