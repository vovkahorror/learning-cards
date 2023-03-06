import React, { useState } from 'react'

import { ReactComponent as Eye } from '../../../assets/img/eye.svg'

import { styled } from 'styles/theme'

type InputPropsType = {
  type: string
  label: string
}
const InputContainer = styled.div`
  position: relative;
  margin-top: 20px;
  margin-bottom: 20px;
`
const InputSelector = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 4px 30px 4px 0px;
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
  border: 0;
  border-bottom: 1px solid ${props => props.theme.colors.inputBorderColor};
  border-radius: 0;
  transition: border-color 0.2s, color 0.2s;

  &:focus,
  &:active {
    border-color: ${props => props.theme.colors.primary};
    outline: 0;
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    top: -8px;
  }
`
const Label = styled.label`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.colors.dark};
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s ease-in;
`

const ButtonTogglePass = styled.button`
  background: none;
  border: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus,
  &:active {
    outline: 0;
  }
`

export const Input = React.memo((props: InputPropsType) => {
  const [type, setType] = useState(props.type)
  const passViewHandler = () => {
    const newType = type === 'password' ? 'text' : 'password'

    setType(newType)
  }

  if (props.type !== 'password') {
    return (
      <InputContainer>
        <InputSelector type={type} placeholder={' '} />
        <Label>{props.label}</Label>
      </InputContainer>
    )
  } else {
    return (
      <InputContainer>
        <InputSelector type={type} placeholder={' '} />
        <Label>{props.label}</Label>
        <ButtonTogglePass onClick={passViewHandler}>
          <Eye />
        </ButtonTogglePass>
      </InputContainer>
    )
  }
})
