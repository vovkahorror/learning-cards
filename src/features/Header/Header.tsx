import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'
import { Container } from '../../common/components/Layout/Container'
import { Row } from '../../common/components/Layout/Row'
import { PATH } from '../../pages/path'

import { HeaderContainer } from './header.styled'

export const Header = () => {
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
        </Row>
      </Container>
    </HeaderContainer>
  )
}
