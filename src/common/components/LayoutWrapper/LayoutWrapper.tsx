import { Outlet } from 'react-router-dom'

import { AuthContainer, AuthContainerCard } from '../Auth/auth.styled'

import { Header } from 'common/components/Header/Header'
import { Container } from 'common/components/Layout/Container'

export const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <AuthContainer>
        <Container>
          <AuthContainerCard maxWidth="420px">
            <Outlet />
          </AuthContainerCard>
        </Container>
      </AuthContainer>
    </>
  )
}
