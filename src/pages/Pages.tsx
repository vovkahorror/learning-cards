import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { RequireAuth } from 'common/hoc/RequireAuth'
import { AuthWrapper } from 'features/auth/Auth/AuthWrapper'
import { Login } from 'features/auth/Login/Login'
import { InfoMessage } from 'features/auth/RecoveryPassword/InfoMessage/InfoMessage'
import { NewPassword } from 'features/auth/RecoveryPassword/NewPassword/NewPassword'
import { Recovery } from 'features/auth/RecoveryPassword/Recovery/Recovery'
import { Registration } from 'features/auth/Registration/Registration'
import { NotFound } from 'features/NotFound/NotFound'
import { Profile } from 'features/Profile/Profile'
import { PATH } from 'pages/path'

export const Pages = () => {
  return (
    <Routes>
      <Route element={<AuthWrapper />}>
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.FORGOT_PASSWORD} element={<Recovery />} />
        <Route path={PATH.CHECK_EMAIL} element={<InfoMessage />} />
        <Route path={PATH.SET_NEW_PASSWORD} element={<NewPassword />}>
          <Route path="*" element={<Navigate to={PATH.SET_NEW_PASSWORD} />} />
          <Route path=":resetPasswordToken" element={<NewPassword />} />
        </Route>
      </Route>

      <Route element={<RequireAuth />}>
        <Route path={'/'} element={<Navigate to={PATH.PROFILE} />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
      </Route>

      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND} />} />
    </Routes>
  )
}
