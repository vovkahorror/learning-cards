import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type VariantsSnackbarType = 'info' | 'success' | 'error' | 'warning'

type AppThemeType = 'light' | 'dark'

type StatusLoadingType = 'idle' | 'global' | 'local'

type InitialStateType = {
  statusLoading: StatusLoadingType
  infoSnackbar: {
    text: string | null
    variant?: VariantsSnackbarType
  }
  isInitialized: boolean
  appTheme: AppThemeType
}

export type SetInfoType = {
  text: string | null
  variant?: VariantsSnackbarType
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: 'idle',
    infoSnackbar: { text: null, variant: undefined },
    isInitialized: false,
    appTheme: 'light',
  } as InitialStateType,
  reducers: {
    setStatusLoading: (state, action: PayloadAction<StatusLoadingType>) => {
      state.statusLoading = action.payload
    },
    setInfoSnackbar: (state, action: PayloadAction<SetInfoType>) => {
      state.infoSnackbar = action.payload
    },
    setIsInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
    setAppTheme: (state, action: PayloadAction<AppThemeType>) => {
      state.appTheme = action.payload
    },
  },
})

export const { setStatusLoading, setInfoSnackbar, setIsInitialized, setAppTheme } = appSlice.actions
export const appReducer = appSlice.reducer
