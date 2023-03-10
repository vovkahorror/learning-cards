import React from 'react'

import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { Error, ForgotDescription, QuestionText } from './recovery.styled'

import { Button } from 'common/components/Button/Button'
import { CustomLink } from 'common/components/CustomLink/CustomLink'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { validateEmail } from 'common/validate/validateEmail'
import { recoveryPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type FormData = {
  email: string
}

export const Recovery = () => {
  const dispatch = useAppDispatch()
  const isSetRecovery = useAppSelector<boolean>(state => state.auth.isSetRecovery)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const onSubmit = (data: FormData) => {
    dispatch(recoveryPasswordTC(data.email.trim()))
    reset()
  }

  if (isSetRecovery) {
    return <Navigate to={PATH.CHECK_EMAIL} />
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} mb={'5'}>
        <h1>Forgot your password?</h1>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            validate: value => validateEmail(value),
          })}
          type={'text'}
          label={'Email'}
        />
        {errors.email && <Error>{errors.email.message}</Error>}

        <ForgotDescription>
          Enter your email address and we will send you further instructions
        </ForgotDescription>

        <Button fullWidth type={'submit'}>
          Send Instructions
        </Button>

        <QuestionText>Did you remember your password?</QuestionText>
        <CustomLink to={PATH.LOGIN}>Try logging in</CustomLink>
      </form>
    </>
  )
}