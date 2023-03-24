import { useEffect } from 'react'

import CustomProvider from 'rsuite/esm/CustomProvider/CustomProvider'
import { ThemeProvider } from 'styled-components'

import { appSelectors } from 'app'
import { Loader, Snackbar } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authMeTC } from 'features/auth/authSlice'
import { Pages } from 'pages/Pages'
import { GlobalStyle, theme } from 'styles/theme'
import 'rsuite/dist/rsuite.min.css'

export function App() {
  const dispatch = useAppDispatch()
  const isInitialized = useAppSelector(appSelectors.isInitialized)
  const statusLoading = useAppSelector(appSelectors.statusLoading)
  const appTheme = useAppSelector(appSelectors.appTheme)

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
        {statusLoading === 'global' && <Loader loading={'main'} />}
        <Pages />
        <Snackbar />
      </ThemeProvider>
    </CustomProvider>
  )
}
