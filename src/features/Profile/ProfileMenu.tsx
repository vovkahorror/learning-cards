import React from 'react'

import { useNavigate } from 'react-router-dom'

import profileImg from '../../assets/img/profile.png'

import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileAvatarImg } from 'features/Profile/profile.styled'
import { PATH } from 'pages/path'

export const ProfileMenu = () => {
  const user = useAppSelector(state => state.auth.user)
  const navigate = useNavigate()

  const navigateToProfile = () => {
    navigate(PATH.PROFILE)
  }

  return (
    <Box display={'flex'} alignItems={'center'}>
      <p style={{ color: 'white', marginRight: '10px' }}>{user.name}</p>
      <ProfileAvatarImg onClick={navigateToProfile} style={{ width: '36px', height: '36px' }}>
        <img src={profileImg} alt="" />
      </ProfileAvatarImg>
    </Box>
  )
}
