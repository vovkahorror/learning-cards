import { useForm } from 'react-hook-form'
import { Navigate, useParams } from 'react-router-dom'

import { NewPasswordDescription } from './newPassword.styled'

import { Button, Box, Input } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { validatePassword } from 'common/validate/validatePassword'
import { authSelectors } from 'features/auth'
import { RequestNewPasswordType } from 'features/auth/authAPI'
import { setNewPasswordTC } from 'features/auth/authSlice'
import { Error } from 'features/auth/RecoveryPassword/Recovery/recovery.styled'
import { PATH } from 'pages/path'

export type FormData = {
  password: string
}

export const NewPassword = () => {
  const isSetNewPassword = useAppSelector(authSelectors.isSetNewPassword)
  const dispatch = useAppDispatch()
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
    <>
      <Box display={'flex'} justifyContent={'center'} mb={'5'}>
        <h1>Create new password</h1>
      </Box>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box mb={'4'}>
          <Input
            {...register('password', {
              validate: (value): string => validatePassword(value),
            })}
            type={'password'}
            label={'Password'}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Box>

        <NewPasswordDescription>
          Create new password and we will send you further instructions to email
        </NewPasswordDescription>

        <Button type={'submit'} fullWidth>
          Create new password
        </Button>
      </form>
    </>
  )
}
