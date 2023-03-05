import { Link } from 'react-router-dom'

import { HeaderContainer } from './header.styled'

import { PATH } from 'pages/path'

export const Header = () => {
  return (
    <HeaderContainer>
      <Link to={PATH.LOGIN}>LOGIN</Link>
      <Link to={PATH.REGISTRATION}>REGISTRATION</Link>
      <Link to={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
      <Link to={PATH.CHECK_EMAIL}>CheckEmail</Link>
      <Link to={PATH.SET_NEW_PASSWORD}>New Password</Link>
      <Link to={PATH.PROFILE}>PROFILE</Link>
      <Link to={PATH.NOT_FOUND}>NOT_FOUND</Link>
    </HeaderContainer>
  )
}
