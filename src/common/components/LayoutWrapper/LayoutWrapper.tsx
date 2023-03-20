import { Outlet } from 'react-router-dom'

import { AuthContainer, AuthContainerCard } from '../Auth/auth.styled'

import { Header } from 'common/components/Header/Header'
import { Container } from 'common/components/Layout/Container'
import { Modal } from 'features/Modal/Modal'

export const LayoutWrapper = () => {
  return (
    <>
      <Header />
      <AuthContainer>
        <Container>
          <AuthContainerCard>
            <Outlet />
          </AuthContainerCard>
        </Container>
      </AuthContainer>
      <Modal />
    </>
  )
}
