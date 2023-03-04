import { styled } from 'styles/theme'

export const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px;
  color: ${props => props.theme.colors.dark};
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: ${props => props.theme.colors.light};
  background-image: none;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 6px;
  transition: border-color 0.2s, color 0.2s;
  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.primary};
    outline: 0;
  }
`
