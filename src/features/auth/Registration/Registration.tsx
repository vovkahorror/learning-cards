import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { IoEyeSharp, IoEyeOff } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { RegisterTC } from 'features/auth/authSlice'

const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 600;
  font-size: 26px;
  line-height: 32px;
`

const Note = styled.span`
  margin-top: 30px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #000000;
  opacity: 0.5;
`

const Reference = styled(Link)`
  margin-top: 10px;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-decoration-line: underline;
  color: #366eff;
`

const TextFiled = styled.div`
  margin-bottom: 5px;
  width: 300px;
  position: relative;
`

const Input = styled.input`
  width: 100%;
  padding: 5px 0;
  height: 30px;
  line-height: 40px;
  text-indent: 10px;
  //margin: 0 0 15px 0;
  border-radius: 5px;
  border: 1px solid #999;
  font-size: 18px;
`

const Eye = styled.span`
  position: absolute;
  top: 6px;
  right: 6px;
  display: inline-block;
  width: 20px;
  height: 20px;
  font-size: 20px;
  color: #000000;
  cursor: pointer;
`

export const Registration = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<RegisterParamsType>({ mode: 'onBlur' || 'onSubmit' || 'onTouched' })

  const onSubmit = (data: RegisterParamsType) => {
    console.log({ email: data.email, password: data.password })
    dispatch(RegisterTC({ email: data.email, password: data.password }))
    navigate('/login')
  }

  const handleClickShowPassword = () => setShowPassword(show => !show)

  return (
    <>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*Email*/}
        <TextFiled>
          <Input
            placeholder="Email"
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address',
              },
            })}
          />
        </TextFiled>
        {errors.email && <div>{errors.email.message}</div>}

        {/*Password*/}
        <TextFiled>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 3,
                message: 'Password not long enough',
              },
            })}
          />
          <Eye onClick={handleClickShowPassword}>
            {showPassword ? <IoEyeOff /> : <IoEyeSharp />}
          </Eye>
        </TextFiled>
        {errors.password && <div>{errors.password.message}</div>}

        {/*Confirm password*/}
        <TextFiled>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            {...register('confirm', {
              required: 'This field is required',
              validate: value => value === watch('password') || 'Your passwords do no match',
            })}
          />
          <Eye onClick={handleClickShowPassword}>
            {showPassword ? <IoEyeOff /> : <IoEyeSharp />}
          </Eye>
        </TextFiled>
        {errors.confirm && <div>{errors.confirm.message}</div>}
        <button type="submit">Sign Up</button>
      </form>

      <Note>Already have an account?</Note>
      <Reference to="/login">Sign In</Reference>
    </>
  )
}

interface RegisterParamsType {
  email: string
  password: string
  confirm?: string
  rememberMe: boolean
}
