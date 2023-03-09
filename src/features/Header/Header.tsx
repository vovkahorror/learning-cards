import React from 'react'

import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { HeaderContainer } from './header.styled'

import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { logoutTC, setRegisterSuccess } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

export const Header = () => {
  const dispatch = useAppDispatch()
  const onLogout = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }

  return (
    <HeaderContainer>
      <Container>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Logo />
          <Link to={PATH.LOGIN}>LOGIN</Link>
          <Link to={PATH.PROFILE}>PROFILE</Link>
          <button onClick={onLogout}>Log out</button>
        </Row>
      </Container>
    </HeaderContainer>
  )
}
