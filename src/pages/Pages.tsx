import React from 'react'

import { Route, Routes, Navigate } from 'react-router-dom'

import { Auth } from 'features/auth/Auth/Auth'
import { Login } from 'features/auth/Login/Login'
import { NewPassword } from 'features/auth/NewPassword/NewPassword'
import { Recovery } from 'features/auth/Recovery/Recovery'
import { Registration } from 'features/auth/Registration/Registration'
import { NotFound } from 'features/NotFound/NotFound'
import { Profile } from 'features/Profile/Profile'
import { ViewComponents } from 'features/ViewComponents/ViewComponents'
import { PATH } from 'pages/path'

export const Pages = () => {
  return (
    <Routes>
      <Route path={'/'} element={<ViewComponents />} />
      <Route element={<Auth />}>
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.RECOVERY} element={<Recovery />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
      </Route>
      <Route path={PATH.VIEW_COMPONENTS} element={<ViewComponents />} />
      <Route path={PATH.NOT_FOUND} element={<NotFound />} />
      <Route path={'*'} element={<Navigate to={PATH.NOT_FOUND} />} />
    </Routes>
  )
}
