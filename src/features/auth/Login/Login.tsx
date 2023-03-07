import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'common/components/Button/Button'
import { CustomLink } from 'common/components/CustomLink/CustomLink'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { loginTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

export const Login = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(state => state.auth.user)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFieldsType>()
  const onSubmit: SubmitHandler<LoginFieldsType> = data => {
    dispatch(loginTC({ email: data.email, password: data.password, rememberMe: data.rememberMe }))
  }

  if (user._id) {
    return <Navigate to={PATH.PROFILE} />
  }

  return (
    <LoginFormWrapper>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign in</h1>
      </Box>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
          type={'text'}
          label={'Email'}
        />
        {errors.email && <Error>{errors.email.message}</Error>}

        <Input
          {...register('password', {
            required: true,
            minLength: {
              value: 7,
              message: 'Password not long enough',
            },
          })}
          type={'password'}
          label={'Password'}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        <RememberForgotBlock>
          <Input type={'checkbox'} {...register('rememberMe')} label={'Remember me'} />
          <ForgotPasswordLink to={PATH.FORGOT_PASSWORD}>Forgot Password?</ForgotPasswordLink>
        </RememberForgotBlock>

        <Button type={'submit'} fullWidth={true}>
          Sign In
        </Button>
      </LoginForm>

      <SignUpBlock>
        <Question>Already have an account?</Question>
        <CustomLink to={PATH.REGISTRATION}>Sign Up</CustomLink>
      </SignUpBlock>
    </LoginFormWrapper>
  )
}

type LoginFieldsType = {
  email: string
  password: string
  rememberMe: boolean
}

const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

const Error = styled.div`
  color: red;
`

const RememberForgotBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 29px;
  margin-bottom: 65px;
`

const ForgotPasswordLink = styled(Link)`
  align-self: flex-end;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #000000;
`

const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-top: 31px;
`

const Question = styled.div`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`
