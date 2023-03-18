import React from 'react'

import { Outlet } from 'react-router-dom'

import { AuthContainer, AuthContainerCard } from 'common/components/Auth/auth.styled'

export const AuthWrapper = () => {
  return (
    <AuthContainer>
      <AuthContainerCard>
        <Outlet />
      </AuthContainerCard>
    </AuthContainer>
  )
}
