import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { Auth } from 'features/auth/Auth/Auth'
import { CheckEmail } from 'features/auth/ForgotPassword/CheckEmail'
import { ForgotPassword } from 'features/auth/ForgotPassword/ForgotPassword'
import { NewPassword } from 'features/auth/ForgotPassword/NewPassword'
import { Login } from 'features/auth/Login/Login'
import { Registration } from 'features/auth/Registration/Registration'
import { NotFound } from 'features/NotFound/NotFound'
import { Profile } from 'features/Profile/Profile'
import { PATH } from 'pages/path'

export const Pages = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Navigate to={PATH.PROFILE} />} />
      <Route element={<Auth />}>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
      </Route>
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path={PATH.PROFILE} element={<Profile />} />
      <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND} />} />
    </Routes>
  )
}
