import { styled } from 'styles/theme'

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1), -1px -1px 2px rgba(0, 0, 0, 0.1);
  color: ${props => props.theme.colors.light};
  backdrop-filter: blur(20px);
  margin-bottom: 36px;
  padding: 12px 20px;
  z-index: 1;
  a {
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }
`
