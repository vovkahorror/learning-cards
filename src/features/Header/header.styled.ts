import { styled } from 'styles/theme'
export const HeaderContainer = styled.div`
  background-color: ${props => props.theme.colors.light};
  box-shadow: 0px 2px 10px rgba(109, 109, 109, 0.25), inset 0px 1px 0px rgba(255, 255, 255, 0.3);
  color: ${props => props.theme.colors.light};
  margin-bottom: 36px;
  padding: 12px 20px;
  z-index: 1;
  a {
    color: ${props => props.theme.colors.dark};
    text-decoration: none;
  }
`
