import { RootStateType } from 'app/store'

export const isInitialized = (state: RootStateType) => state.app.isInitialized
export const statusLoading = (state: RootStateType) => state.app.statusLoading
export const infoSnackbarText = (state: RootStateType) => state.app.infoSnackbar.text
export const infoSnackbarVariant = (state: RootStateType) => state.app.infoSnackbar.variant
export const appTheme = (state: RootStateType) => state.app.appTheme
