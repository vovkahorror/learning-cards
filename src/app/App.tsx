import React, { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import { Loader } from 'common/components/Loader/Loader'
import { Snackbar } from 'common/components/Snackbar/Snackbar'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { authMeTC } from 'features/auth/authSlice'
import { Header } from 'features/Header/Header'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Loader />
      <Snackbar />
      <Header />
      <Pages />
    </ThemeProvider>
  )
}

export default App
