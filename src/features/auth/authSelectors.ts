import { RootStateType } from 'app/store'

export const id = (state: RootStateType) => state.auth.user._id
export const name = (state: RootStateType) => state.auth.user.name
export const email = (state: RootStateType) => state.auth.user.email
export const isLoggedIn = (state: RootStateType) => state.auth.isLoggedIn
export const isSetNewPassword = (state: RootStateType) => state.auth.isSetNewPassword
export const isSetRecovery = (state: RootStateType) => state.auth.isSetRecovery
export const registerSuccess = (state: RootStateType) => state.auth.registerSuccess
export const userEmailForEmail = (state: RootStateType) => state.auth.userEmail
