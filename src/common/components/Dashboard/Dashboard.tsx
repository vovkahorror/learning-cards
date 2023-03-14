import { Outlet } from 'react-router-dom'

import { AuthContainerCard } from 'common/components/Auth/auth.styled'
import { DashboardContainer } from 'common/components/Dashboard/dashboard.styled'
import { Container } from 'common/components/Layout/Container'

export const DashboardWrapper = () => {
  return (
    <DashboardContainer>
      <Container>
        <AuthContainerCard maxWidth="100%">
          <Outlet />
        </AuthContainerCard>
      </Container>
    </DashboardContainer>
  )
}
