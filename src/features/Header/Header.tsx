import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { HeaderContainer } from './header.styled'

import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { logoutTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

export const Header = () => {
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logoutTC())
  }

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
          <button onClick={onLogout}>Log out</button>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
