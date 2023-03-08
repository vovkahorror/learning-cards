import React from 'react'

import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { PATH } from 'pages/path'

export const RequireAuth = () => {
  const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />
  }

  return <Outlet />
}
