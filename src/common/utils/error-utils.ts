import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { setInfoMessage } from 'app/appSlice'

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch) => {
  if (axios.isAxiosError(e)) {
    const error = e.response?.data ? e.response.data.error : e.message

    dispatch(setInfoMessage(error))
  } else {
    dispatch(setInfoMessage(e.message))
  }
}
