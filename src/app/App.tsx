import React from 'react'

import { ThemeProvider } from 'styled-components'

import { Header } from 'features/Header/Header'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Pages />
    </ThemeProvider>
  )
}

export default App
