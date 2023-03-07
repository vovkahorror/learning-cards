import { Dispatch } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'

import { setInfoMessage, setColorMessage } from 'app/appSlice'

export const errorUtils = (e: Error | AxiosError<{ error: string }>, dispatch: Dispatch) => {
  if (axios.isAxiosError(e)) {
    const error = e.response?.data ? e.response.data.error : e.message

    dispatch(setInfoMessage(error))
    dispatch(setColorMessage('red'))
  } else {
    dispatch(setInfoMessage(e.message))
    dispatch(setColorMessage('red'))
  }
}
