import React from 'react'

import { ReactComponent as Logo } from '../../assets/img/logo.svg'

import { HeaderContainer } from './header.styled'

import { CustomLink } from 'common/components/CustomLink/CustomLink'
import { Container } from 'common/components/Layout/Container'
import { Row } from 'common/components/Layout/Row'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileMenu } from 'features/Profile/ProfileMenu'
import { PATH } from 'pages/path'

export const Header = () => {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

  return (
    <HeaderContainer>
      <Container>
        <Row justifyContent={'space-between'} alignItems={'center'}>
          <Logo />
          {isLoggedIn ? (
            <ProfileMenu />
          ) : (
            <CustomLink variant={'contained'} to={PATH.LOGIN}>
              Sign in
            </CustomLink>
          )}
        </Row>
      </Container>
    </HeaderContainer>
  )
}
