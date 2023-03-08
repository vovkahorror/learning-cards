import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'common/components/Button/Button'
import { CustomLink } from 'common/components/CustomLink/CustomLink'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { validatePassword } from 'common/validate/validateEmail'
import { recoveryPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type FormData = {
  email: string
}

export const RecoveryPassword = () => {
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
    <Box style={{ width: '413px' }}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <ForgotTitle>Forgot your password?</ForgotTitle>
      </Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register('email', {
            validate: value => validatePassword(value),
          })}
          type={'email'}
          label={'Email'}
        />
        <p>{errors?.email?.message}</p>
        <ForgotDescription>
          Enter your email address and we will send you further instructions
        </ForgotDescription>
        <Button fullWidth type={'submit'}>
          submit
        </Button>
        <QuestionText>Did you remember your password?</QuestionText>
        <CustomLink to={PATH.LOGIN}>Try logging in</CustomLink>
      </form>
    </Box>
  )
}

//style

const ForgotTitle = styled.p`
  font-size: 26px;
  color: black;
  font-weight: 700;
`

const ForgotDescription = styled.p`
  margin-bottom: 65px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`

const QuestionText = styled.p`
  margin: 31px 0 21px;
  display: block;
  text-align: center;

  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
`
