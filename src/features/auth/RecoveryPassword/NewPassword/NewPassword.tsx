import { useForm } from 'react-hook-form'
import { Navigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { validatePassword } from 'common/validate/validatePassword'
import { RequestNewPasswordType } from 'features/auth/authAPI'
import { setNewPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

export type FormData = {
  password: string
}

export const NewPassword = () => {
  const dispatch = useAppDispatch()
  const isSetNewPassword = useAppSelector<boolean>(state => state.auth.isSetNewPassword)
  const { resetPasswordToken } = useParams()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onBlur',
  })

  const onSubmit = (data: FormData) => {
    const payload: RequestNewPasswordType = {
      password: data.password.trim(),
      resetPasswordToken,
    }

    dispatch(setNewPasswordTC(payload))
    reset()
  }

  if (isSetNewPassword) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <Box style={{ width: '413px' }}>
      <NewPasswordTitle>Create new password</NewPasswordTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={'3'}>
          <Input
            {...register('password', {
              validate: (value): string => validatePassword(value),
            })}
            type={'password'}
            label={'Password'}
          />
        </Box>
        <p>{errors?.password?.message}</p>
        <NewPasswordDescription>
          Create new password and we will send you further instructions to email
        </NewPasswordDescription>
        <Button type={'submit'} fullWidth>
          Create new password
        </Button>
      </form>
    </Box>
  )
}

//styled

const NewPasswordTitle = styled.p`
  margin-bottom: 80px;
  text-align: center;

  font-size: 26px;
  color: black;
  font-weight: 700;
`
const NewPasswordDescription = styled.p`
  margin-bottom: 42px;

  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
  opacity: 0.5;
`
