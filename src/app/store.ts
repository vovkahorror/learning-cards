import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'app/appSlice'
import { authReducer } from 'features/auth/authSlice'
import { cardsReducer } from 'features/cards/cardsSlice'
import { learnReducer } from 'features/learn/learnSlice'
import { packsReducer } from 'features/packs/packsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    packs: packsReducer,
    cards: cardsReducer,
    learn: learnReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// @ts-ignore
window.store = store
