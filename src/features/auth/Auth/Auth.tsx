import React from 'react'

import { Outlet } from 'react-router-dom'

import { AuthContainer, AuthContainerCard } from 'features/auth/Auth/auth.styled'

export const Auth = () => {
  return (
    <AuthContainer>
      <AuthContainerCard>
        <Outlet />
      </AuthContainerCard>
    </AuthContainer>
  )
}
