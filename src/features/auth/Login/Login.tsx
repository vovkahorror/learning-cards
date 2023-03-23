import { SubmitHandler, useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { Button, LinkText, Input, Box } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { validateEmail } from 'common/validate/validateEmail'
import { authSelectors } from 'features/auth'
import { loginTC, setRegisterSuccess } from 'features/auth/authSlice'
import {
  Error,
  ForgotPasswordLink,
  LoginForm,
  Question,
  SignUpBlock,
} from 'features/auth/Login/login.styled'
import { PATH } from 'pages/path'

export const Login = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector(authSelectors.isLoggedIn)
  const registerSuccess = useAppSelector(authSelectors.registerSuccess)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFieldsType>({ mode: 'onBlur' || 'onSubmit' || 'onTouched' })
  const onSubmit: SubmitHandler<LoginFieldsType> = data => {
    dispatch(loginTC({ email: data.email, password: data.password, rememberMe: data.rememberMe }))
  }

  if (isLoggedIn) {
    return <Navigate to={PATH.PACKS} />
  }

  const registrationFailed = () => {
    if (registerSuccess) dispatch(setRegisterSuccess(false))
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign in</h1>
      </Box>

      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        <Box mb="4">
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: 'This field is required',
              validate: value => validateEmail(value),
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Box>

        <Box mb="4">
          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: 'This field is required',
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Box>

        <Box display={'flex'} justifyContent={'space-between'}>
          <Input type={'checkbox'} {...register('rememberMe')} label={'Remember me'} />
          <ForgotPasswordLink to={PATH.FORGOT_PASSWORD}>Forgot Password?</ForgotPasswordLink>
        </Box>

        <Button type={'submit'} fullWidth={true}>
          Sign In
        </Button>
      </LoginForm>

      <SignUpBlock>
        <Question>Already have an account?</Question>
        <LinkText onClick={registrationFailed} to={PATH.REGISTRATION}>
          Sign Up
        </LinkText>
      </SignUpBlock>
    </>
  )
}

type LoginFieldsType = {
  email: string
  password: string
  rememberMe: boolean
}
