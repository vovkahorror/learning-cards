import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { getUserData } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type LoginFields = {
  email: string
  password: string
  rememberMe: boolean
}

export const Login = () => {
  const dispatch = useAppDispatch()
  const { register, handleSubmit } = useForm<LoginFields>()
  const onSubmit: SubmitHandler<LoginFields> = data =>
    dispatch(getUserData(data.email, data.password, data.rememberMe))
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign in</h1>
      </Box>
    
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input {...register('email', { required: true })} type={'text'} label={'Email'} />
        <Input {...register('password', { required: true })} type={'password'} label={'Password'} />
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} my={'4'}>
          <Input type={'checkbox'} {...register('rememberMe')} label={'rememberMe'} />
          <Link to={PATH.FORGOT_PASSWORD}>Forgot Password</Link>
        </Box>
        <Button type={'submit'} fullWidth={true}>
          Sign In
        </Button>
      </form>
    </>
  )
}
