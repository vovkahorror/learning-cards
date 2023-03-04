import { styled } from 'styles/theme'

export const AuthContainer = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthContainerCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  padding: 30px;
  border-radius: 5px;
  min-width: 320px;
`
