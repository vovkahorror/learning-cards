import { Link } from 'react-router-dom'

import { styled, theme } from 'styles/theme'

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Error = styled.div`
  color: red;
  font-size: 13px;
  margin-top: 5px;
`

export const RememberForgotBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-bottom: 45px;
`

export const ForgotPasswordLink = styled(Link)`
  align-self: flex-end;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
`

export const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 31px;
`

export const Question = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`

export const SignUpLink = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: ${theme.colors.fontMain};
`
