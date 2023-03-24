import { Navigate, Outlet } from 'react-router-dom'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { authSelectors } from 'features/auth'
import { PATH } from 'pages/path'

export const RequireAuth = () => {
  const isLoggedIn = useAppSelector(authSelectors.isLoggedIn)

  if (!isLoggedIn) return <Navigate to={PATH.LOGIN} />

  return <Outlet />
}
