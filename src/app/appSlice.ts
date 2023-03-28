import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type VariantsSnackbarType = 'info' | 'success' | 'error' | 'warning'
type AppThemeType = 'light' | 'dark'
type StatusLoadingType = 'idle' | 'global' | 'local'

export type AppInitialStateType = ReturnType<typeof appSlice.getInitialState>

export type SetInfoType = {
  text: string | null
  variant?: VariantsSnackbarType
}

const appSlice = createSlice({
  name: 'app',
  initialState: {
    statusLoading: 'idle' as StatusLoadingType,
    infoSnackbar: { text: null, variant: undefined } as SetInfoType,
    isInitialized: false,
    appTheme: 'light' as AppThemeType,
  },
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
