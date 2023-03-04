import { styled } from 'styles/theme'
export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  padding: 20px;
  gap: 20px;
  z-index: 1;
  a {
    color: ${props => props.theme.colors.light};
    text-decoration: none;
  }
`
