import { useForm } from 'react-hook-form'
import { Navigate, useParams } from 'react-router-dom'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { RequestNewPasswordType } from 'features/auth/authAPI'
import { setNewPasswordTC } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

type FormData = {
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

  const validate = {
    required: 'Required',
    pattern: {
      value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
      message:
        'Your password must be at least 8 characters, contain at least one lower case, letter one uppercase letter, one digit, one special char (! @ # $ % ^ & * _ ) and must not contain Whitespaces',
    },
  }

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
    <div>
      <p>Create new password</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('password', validate)} placeholder={'Password'} />
        <p>{errors?.password?.message}</p>
        <p>Create new password and we will send you further instructions to email</p>
        <button type={'submit'}>Create new password</button>
      </form>
    </div>
  )
}
