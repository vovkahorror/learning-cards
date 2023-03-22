import { styled } from 'styles/theme'

export const InputContainer = styled.div`
  position: relative;
`
export const InputSelector = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 30px 4px 0;
  color: ${props => props.theme.colors.dark};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5714285714285714;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: transparent;
  background-image: none;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.colors.fontMain};
  border-radius: 0;
  transition: border-color 0.2s, color 0.2s;
  z-index: 1;

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }

  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.secondary};
    outline: 0;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -7px;
  }
`
export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.dark};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease-in;
`
export const ButtonTogglePass = styled.button`
  background: none;
  border: 0;
  position: absolute;
  right: 0;
  top: 4px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:focus,
  &:active {
    outline: 0;
  }
`

export const CheckIcon = styled.div`
  background-color: ${props => props.theme.colors.invisible};
  border: 1px solid ${props => props.theme.colors.fontMain};
  border-radius: 5px;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  margin-right: 10px;
  position: relative;
  transition: background-color 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:after {
    content: '';
    position: absolute;
    width: 6px;
    height: 10px;
    border: 2px solid ${props => props.theme.colors.light};
    border-top: 0;
    border-left: 0;
    left: 5px;
    top: 2px;
    opacity: 0;
    transform: rotate(40deg);
    transition: opacity 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`

export const Checkbox = styled.label`
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.fontMain};

  input {
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
  }

  input:checked + ${CheckIcon} {
    background: ${props => props.theme.colors.fontMain};

    &:after {
      opacity: 1;
    }
  }
`
