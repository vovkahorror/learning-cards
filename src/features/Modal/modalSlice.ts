import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialStateType = {
  isModal: boolean
  title: string
  buttonName: string
}

const modalSlice = createSlice({
  name: 'auth',
  initialState: {
    isModal: false,
    title: '',
  } as InitialStateType,
  reducers: {
    setModal: (state, action: PayloadAction<boolean>) => {
      state.isModal = action.payload
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
  },
})

export const { setModal, setTitle } = modalSlice.actions
export const modalReducer = modalSlice.reducer
