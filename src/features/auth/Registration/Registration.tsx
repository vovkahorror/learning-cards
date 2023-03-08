import React from 'react'

import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { FormDataType } from '../authAPI'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { validatePassword } from 'common/validate/validatePassword'
import { RegisterTC } from 'features/auth/authSlice'
import {
  Error,
  LoginForm,
  Question,
  SignUpBlock,
  SignUpLink,
} from 'features/auth/Login/login.styled'
import { PATH } from 'pages/path'

export const Registration = () => {
  const dispatch = useAppDispatch()
  const registerSuccess = useAppSelector<boolean>(state => state.auth.registerSuccess)
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormDataType>({ mode: 'onBlur' || 'onSubmit' || 'onTouched' })

  const onSubmit = (data: FormDataType) => {
    dispatch(RegisterTC({ email: data.email, password: data.password }))
  }

  if (registerSuccess) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign Up</h1>
      </Box>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        {/*Email*/}
        <Input
          type="email"
          label="Email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && <Error>{errors.email.message}</Error>}

        {/*Password*/}
        <Input
          type="password"
          label="Password"
          {...register('password', {
            required: 'This field is required',
            validate: value => validatePassword(value),
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        {/*Confirm password*/}
        <Input
          type="password"
          label="Confirm password"
          {...register('confirm', {
            required: 'This field is required',
            validate: value =>
              validatePassword(value) ||
              value === watch('password') ||
              'Your passwords do no match',
          })}
        />
        {errors.confirm && <Error>{errors.confirm.message}</Error>}
        <Button type={'submit'} fullWidth={true}>
          Sign Up
        </Button>
      </LoginForm>

      <SignUpBlock>
        <Question>Already have an account?</Question>
        <SignUpLink to={PATH.LOGIN}>Sign In</SignUpLink>
      </SignUpBlock>
    </>
  )
}
