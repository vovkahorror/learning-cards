import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { Error, ForgotDescription, QuestionText } from './recovery.styled'

import { Button, LinkText, Input, Box } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { validateEmail } from 'common/validate/validateEmail'
import { authSelectors } from 'features/auth'
import { recoveryPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type FormData = {
  email: string
}

export const Recovery = () => {
  const isSetRecovery = useAppSelector(authSelectors.isSetRecovery)
  const dispatch = useAppDispatch()

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

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
          <QuestionText>Did you remember your password?</QuestionText>
          <LinkText to={PATH.LOGIN}>Try logging in</LinkText>
        </Box>
      </form>
    </>
  )
}
