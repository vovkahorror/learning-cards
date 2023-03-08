import React from 'react'

import { Link, useNavigate } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { HeaderContainer } from './header.styled'

import { Button } from 'common/components/Button/Button'
import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { PATH } from 'pages/path'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <Container>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Logo />
          <Link to={PATH.LOGIN}>LOGIN</Link>
          <Link to={PATH.REGISTRATION}>REGISTRATION</Link>
          <Link to={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
          <Link to={PATH.CHECK_EMAIL}>CheckEmail</Link>
          <Link to={PATH.SET_NEW_PASSWORD}>New Password</Link>
          <Link to={PATH.PROFILE}>PROFILE</Link>
          <Link to={PATH.NOT_FOUND}>NOT_FOUND</Link>
          <Button onClick={() => navigate(`${PATH.LOGIN}`)}>Sign In</Button>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
