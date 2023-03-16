import { Outlet } from 'react-router-dom'

import { AuthContainerCard } from '../Auth/auth.styled'
import { DashboardContainer } from '../Dashboard/dashboard.styled'

import { Header } from 'common/components/Header/Header'
import { Container } from 'common/components/Layout/Container'

export const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <DashboardContainer>
        <Container>
          <AuthContainerCard maxWidth="100%">
            <Outlet />
          </AuthContainerCard>
        </Container>
      </DashboardContainer>
    </>
  )
}
