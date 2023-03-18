import { useForm } from 'react-hook-form'
import { Navigate } from 'react-router-dom'

import { FormDataType } from '../authAPI'

import { Button, LinkText, Input, Box } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { validatePassword } from 'common/validate/validatePassword'
import { authSelectors } from 'features/auth'
import { RegisterTC } from 'features/auth/authSlice'
import { Error, LoginForm, Question, SignUpBlock } from 'features/auth/Login/login.styled'
import { PATH } from 'pages/path'

export const Registration = () => {
  const registerSuccess = useAppSelector(authSelectors.registerSuccess)
  const dispatch = useAppDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<FormDataType>({ mode: 'onBlur' || 'onSubmit' || 'onTouched' })

  const onSubmit = (data: FormDataType) => {
    dispatch(RegisterTC({ email: data.email, password: data.password }))
  }

  if (registerSuccess) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign Up</h1>
      </Box>
      <LoginForm onSubmit={handleSubmit(onSubmit)}>
        {/*Email*/}
        <Box mb="4">
          <Input
            type="email"
            label="Email"
            {...register('email', {
              required: 'This field is required',
            })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Box>

        {/*Password*/}
        <Box mb="4">
          <Input
            type="password"
            label="Password"
            {...register('password', {
              required: 'This field is required',
              validate: value => validatePassword(value),
            })}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </Box>

        {/*Confirm password*/}
        <Box mb="5">
          <Input
            type="password"
            label="Confirm password"
            {...register('confirm', {
              required: 'This field is required',
              validate: value =>
                validatePassword(value) ||
                value === watch('password') ||
                'Your passwords do no match',
            })}
          />
          {errors.confirm && <Error>{errors.confirm.message}</Error>}
        </Box>

        <Button type={'submit'} fullWidth={true}>
          Sign Up
        </Button>
      </LoginForm>

      <SignUpBlock>
        <Question>Already have an account?</Question>
        <LinkText to={PATH.LOGIN}>Sign In</LinkText>
      </SignUpBlock>
    </>
  )
}
