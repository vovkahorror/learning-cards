import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { appReducer } from 'app/appSlice'
import { authReducer } from 'features/auth/authSlice'
import { packsReducer } from 'features/packs/packsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    packs: packsReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
