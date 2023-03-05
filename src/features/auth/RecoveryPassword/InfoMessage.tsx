import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ReactComponent as CheckEmailIcon } from 'assets/image/checkEmail.svg'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { PATH } from 'pages/path'

export const InfoMessage = () => {
  const userEmail = useAppSelector<string>(state => state.auth.userEmail)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '347px' }}>
      <p style={{ fontSize: '30px' }}>Check Email</p>
      <CheckEmailIconComp />
      <p>We’ve sent an Email with instructions to {userEmail}</p>
      <StyledLink to={PATH.LOGIN}>Back to login</StyledLink>
    </div>
  )
}

const CheckEmailIconComp = styled(CheckEmailIcon)`
  margin: 30px 0;
`

export const StyledLink = styled(Link)`
  display: inline-block;
  width: 100%;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-decoration: none;

  text-align: center;
  letter-spacing: 0.01em;

  color: #fff;

  padding: 8px;
  background: #366eff;
  box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
  border-radius: 30px;
  margin-top: 40px;
`
