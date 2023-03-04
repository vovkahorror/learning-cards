import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'app/appSlice'
import { authReducer } from 'features/auth/authSlice'
import { profileReducer } from 'features/Profile/profileSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    app: appReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
