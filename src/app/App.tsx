import { useEffect } from 'react'

import CustomProvider from 'rsuite/esm/CustomProvider/CustomProvider'
import { ThemeProvider } from 'styled-components'

import { Loader, Snackbar } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authMeTC } from 'features/auth/authSlice'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'
import 'rsuite/dist/rsuite.min.css'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(state => state.app.isInitialized)
  const statusLoading = useAppSelector(state => state.app.statusLoading)
  const appTheme = useAppSelector(state => state.app.appTheme)

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  if (!isInitialized) {
    return <Loader loading={'isInitialized'} />
  }

  return (
    <CustomProvider theme={appTheme}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {statusLoading && <Loader loading={'main'} />}
        <Pages />
        <Snackbar />
      </ThemeProvider>
    </CustomProvider>
  )
}
