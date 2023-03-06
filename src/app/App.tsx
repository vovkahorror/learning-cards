import React from 'react'

import { ThemeProvider } from 'styled-components'

import { Loader } from 'common/components/Loader/Loader'
import { Snackbar } from 'common/components/Snackbar/Snackbar'
import { Header } from 'features/Header/Header'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'

function App() {
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
