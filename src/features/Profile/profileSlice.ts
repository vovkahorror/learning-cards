import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'me',
  initialState: {},
  reducers: {},
})

// export const meTc = createAsyncThunk(
//   ''
// )

export const profileReducer = profileSlice.reducer
