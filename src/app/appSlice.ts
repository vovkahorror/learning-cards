import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  statusLoading: boolean
  infoMessage: string | null
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: false,
    infoMessage: null,
  } as InitialStateType,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<boolean>) => {
      state.statusLoading = action.payload
    },
    setInfoMessage: (state, action: PayloadAction<string | null>) => {
      state.infoMessage = action.payload
    },
  },
})

export const { setStatusLoading, setInfoMessage } = appSlice.actions
export const appReducer = appSlice.reducer
