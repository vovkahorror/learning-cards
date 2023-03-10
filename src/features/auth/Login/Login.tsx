import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { Button, LinkText } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { validateEmail } from 'common/validate/validateEmail'
import { loginTC } from 'features/auth/authSlice'
import {
  Error,
  ForgotPasswordLink,
  LoginForm,
  Question,
  RememberForgotBlock,
  SignUpBlock,
} from 'features/auth/Login/login.styled'
import { PATH } from 'pages/path'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFieldsType>()
  const onSubmit: SubmitHandler<LoginFieldsType> = data => {
    dispatch(loginTC({ email: data.email, password: data.password, rememberMe: data.rememberMe }))
  }

  if (isLoggedIn) {
    return <Navigate to={PATH.PROFILE} />
  }

  return (
    <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'stretch'}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign in</h1>
      </Box>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Box>
          <Input
            {...register('email', {
              validate: value => validateEmail(value),
            })}
            type={'text'}
            label={'Email'}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Box>

        <Box>
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
        </Box>

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
        <LinkText to={PATH.REGISTRATION}>Sign Up</LinkText>
      </SignUpBlock>
    </Box>
  )
}

type LoginFieldsType = {
  email: string
  password: string
  rememberMe: boolean
}
