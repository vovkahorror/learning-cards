import React from 'react'

import profileImg from '../../assets/img/profile.png'

import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileAvatarImg } from 'features/Profile/profile.styled'

export const ProfileMenu = () => {
  const user = useAppSelector(state => state.auth.user)

  return (
    <Box display={'flex'} alignItems={'center'}>
      <p style={{ color: 'black', marginRight: '10px' }}>{user.name}</p>
      <ProfileAvatarImg style={{ width: '36px', height: '36px' }}>
        <img src={profileImg} alt="" />
      </ProfileAvatarImg>
    </Box>
  )
}
