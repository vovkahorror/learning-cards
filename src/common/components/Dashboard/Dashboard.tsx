import { Outlet } from 'react-router-dom'

import { DashboardContainer } from 'common/components/Dashboard/dashboard.styled'
import { Container } from 'common/components/Layout/Container'

export const DashboardWrapper = () => {
  return (
    <DashboardContainer>
      <Container>
        <Outlet />
      </Container>
    </DashboardContainer>
  )
}
