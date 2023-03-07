import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  statusLoading: boolean
  infoMessage: string | null
  colorMessage: 'green' | 'red'
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: false,
    infoMessage: null,
    colorMessage: 'green',
  } as InitialStateType,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<boolean>) => {
      state.statusLoading = action.payload
    },
    setInfoMessage: (state, action: PayloadAction<string | null>) => {
      state.infoMessage = action.payload
    },
    setColorMessage: (state, action: PayloadAction<'green' | 'red'>) => {
      state.colorMessage = action.payload
    },
  },
})

export const { setStatusLoading, setInfoMessage, setColorMessage } = appSlice.actions
export const appReducer = appSlice.reducer
