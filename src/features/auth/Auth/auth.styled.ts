import { styled } from 'styles/theme'

export const AuthContainer = styled.div`
  min-height: calc(100vh - 108px);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AuthContainerCard = styled.div`
  background-color: ${props => props.theme.colors.light};
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  min-width: 413px;
`
