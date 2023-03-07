import React from 'react'

import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { FormDataType } from '../authAPI'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { RegisterTC } from 'features/auth/authSlice'

const Note = styled.span`
  margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`

const Reference = styled(Link)`
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #366eff;
`

const Error = styled.div`
  color: red;
`

export const Registration = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormDataType>({ mode: 'onBlur' || 'onSubmit' || 'onTouched' })

  const onSubmit = (data: FormDataType) => {
    console.log({ email: data.email, password: data.password })
    dispatch(RegisterTC({ email: data.email, password: data.password }))
    navigate('/login')
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign Up</h1>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            minLength: {
              value: 3,
              message: 'Password not long enough',
            },
          })}
        />
        {errors.password && <Error>{errors.password.message}</Error>}

        {/*Confirm password*/}
        <Input
          type="password"
          label="Confirm password"
          {...register('confirm', {
            required: 'This field is required',
            validate: value => value === watch('password') || 'Your passwords do no match',
          })}
        />
        {errors.confirm && <Error>{errors.confirm.message}</Error>}
        <Button type={'submit'} fullWidth={true}>
          Sign Up
        </Button>
      </form>

      <Note>Already have an account?</Note>
      <Reference to="/login">Sign In</Reference>
    </>
  )
}
