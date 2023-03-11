import React from 'react'

import { useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from 'assets/img/logo.svg'
import { Button } from 'common/components/Button/Button'
import { HeaderContainer } from 'common/components/Header/header.styled'
import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileMenu } from 'features/Profile/ProfileMenu'
import { PATH } from 'pages/path'

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Container>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Logo />
          {isLoggedIn && <ProfileMenu />}
          {!isLoggedIn && <Button onClick={() => navigate(PATH.LOGIN)}>Sign in</Button>}
        </Row>
      </Container>
    </HeaderContainer>
  )
}
