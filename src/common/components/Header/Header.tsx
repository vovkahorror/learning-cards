import { BiMoon, BiSun } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Toggle from 'rsuite/esm/Toggle/Toggle'

import { appSelectors } from 'app'
import { setAppTheme } from 'app/appSlice'
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { Button, Box, Row, Container } from 'common/components'
import { HeaderContainer } from 'common/components/Header/header.styled'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { ProfileHeader } from 'features/Profile/ProfileHeader'
import { PATH } from 'pages/path'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(authSelectors.isLoggedIn)
  const appTheme = useAppSelector(appSelectors.appTheme)
  const navigate = useNavigate()

  const handleSetTheme = () => {
    dispatch(setAppTheme(appTheme === 'dark' ? 'light' : 'dark'))
  }

  return (
    <HeaderContainer>
      <Container>
        <Row alignItems={'center'}>
          <Logo />
          <Box display={'flex'} alignItems={'center'} gap={'20px'} ml={'auto'}>
            <Toggle
              onChange={handleSetTheme}
              size="lg"
              checkedChildren={
                <BiSun style={{ marginTop: '6px' }} className={'rs-icon'} size={'1.2rem'} />
              }
              unCheckedChildren={
                <BiMoon style={{ marginTop: '6px' }} className={'rs-icon'} size={'1.2rem'} />
              }
            />

            {isLoggedIn && <ProfileHeader />}
            {!isLoggedIn && (
              <Button
                style={{ border: '1px solid rgba(255, 255, 255, 0.5)' }}
                onClick={() => navigate(PATH.LOGIN)}
              >
                Sign in
              </Button>
            )}
          </Box>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
