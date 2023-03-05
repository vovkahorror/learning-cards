import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'

import { authAPI, UserType } from 'features/auth/authAPI'

const initialState = {
  user: {} as UserType,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData(state, action: PayloadAction<UserType>) {
      state.user = action.payload
    },
  },
})

export const authReducer = authSlice.reducer

export const getUserData =
  (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch) => {
    try {
      const res = await authAPI.login(email, password, rememberMe)

      dispatch(authSlice.actions.setUserData(res.data))
    } catch (e) {
      //in progress...
    }
  }
