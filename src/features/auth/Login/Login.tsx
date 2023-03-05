import React from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { getUserData } from 'features/auth/authSlice'

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email', { required: true })} />
      <Input {...register('password', { required: true })} />
      <Input type={'checkbox'} {...register('rememberMe')} />
      <Button type={'submit'} />
    </form>
  )
}
