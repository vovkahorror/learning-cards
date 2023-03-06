import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type VariantsSnackbarType = 'info' | 'success' | 'error' | 'warning'

type InitialStateType = {
  statusLoading: boolean
  infoSnackbar: {
    message: string | null
    variant?: VariantsSnackbarType
  }
}

type SetInfoType = {
  message: string | null
  variant?: VariantsSnackbarType
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: false,
    infoSnackbar: { message: null, variant: undefined },
  } as InitialStateType,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<boolean>) => {
      state.statusLoading = action.payload
    },
    setInfoSnackbar: (state, action: PayloadAction<SetInfoType>) => {
      state.infoSnackbar = action.payload
    },
  },
})

export const { setStatusLoading, setInfoSnackbar } = appSlice.actions
export const appReducer = appSlice.reducer
