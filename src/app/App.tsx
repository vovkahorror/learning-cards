import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { Loader } from 'common/components/Loader/Loader'
import { Snackbar } from 'common/components/Snackbar/Snackbar'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { authMeTC } from 'features/auth/authSlice'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'
import 'rsuite/dist/rsuite.min.css'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(state => state.app.isInitialized)

  console.log('App')

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  if (!isInitialized) {
    return <h1 style={{ paddingTop: '200px' }}>loading</h1>
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loader />
      <Snackbar />
      <Pages />
    </ThemeProvider>
  )
}
