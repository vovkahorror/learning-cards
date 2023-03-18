import React from 'react'

import { BiMoon, BiSun } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import Toggle from 'rsuite/esm/Toggle/Toggle'

import { setAppTheme } from 'app/appSlice'
import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { Button } from 'common/components/Button/Button'
import { HeaderContainer } from 'common/components/Header/header.styled'
import { Box } from 'common/components/Layout/Box'
import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileHeader } from 'features/Profile/ProfileHeader'
import { PATH } from 'pages/path'

export const Header = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const appTheme = useAppSelector(state => state.app.appTheme)
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
              checkedChildren={<BiSun className={'rs-icon'} size={'1.2rem'} />}
              unCheckedChildren={<BiMoon className={'rs-icon'} size={'1.2rem'} />}
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
