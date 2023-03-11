import background from 'assets/img/background.jpg'
import { styled } from 'styles/theme'

export const AuthContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(${background}) no-repeat center / cover;
`

export const AuthContainerCard = styled.div`
  background-color: transparent;
  backdrop-filter: blur(20px);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 413px;
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  min-width: 413px;
`