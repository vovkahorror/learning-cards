import React, {
  ForwardedRef,
  useState,
  memo,
  forwardRef,
  MouseEvent,
  InputHTMLAttributes,
} from 'react'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import {
  ButtonTogglePass,
  Checkbox,
  CheckIcon,
  InputContainer,
  InputSelector,
  Label,
} from './input.styled'

type DefaultInputPropsType = InputHTMLAttributes<HTMLInputElement>

type InputPropsType = DefaultInputPropsType & {
  type: string
  label: string
}

export const Input = memo(
  forwardRef((props: InputPropsType, ref: ForwardedRef<HTMLInputElement>) => {
    const [type, setType] = useState(props.type)
    const { label, ...rest } = props
    const passViewHandler = (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      const newType = type === 'password' ? 'text' : 'password'

      setType(newType)
    }

    switch (props.type) {
      case 'password':
        return (
          <InputContainer>
            <InputSelector ref={ref} {...rest} type={type} placeholder={' '} />
            <Label>{props.label}</Label>
            <ButtonTogglePass onClick={passViewHandler}>
              {type === 'password' ? (
                <AiFillEye size={'2rem'} />
              ) : (
                <AiFillEyeInvisible size={'2rem'} />
              )}
            </ButtonTogglePass>
          </InputContainer>
        )
      case 'checkbox':
        return (
          <Checkbox>
            <input {...rest} ref={ref} />
            <CheckIcon />
            {props.label}
          </Checkbox>
        )
      default:
        return (
          <InputContainer>
            <InputSelector {...rest} type={type} ref={ref} placeholder={' '} />
            <Label>{props.label}</Label>
          </InputContainer>
        )
    }
  })
)
