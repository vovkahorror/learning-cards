import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai'

import profileImg from '../../assets/img/profile.png'

import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { Box } from 'common/components/Layout/Box'
import { ProfileAvatar, ProfileAvatarImg, ProfileUpload } from 'features/Profile/profile.styled'

export const Profile = () => {
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={'5'}
        flexDirection={'column'}
      >
        <h1>Personal Information</h1>
        <Box my={'4'}>
          <ProfileAvatar>
            <ProfileAvatarImg>
              <img src={profileImg} alt="" />
            </ProfileAvatarImg>
            <ProfileUpload>
              <AiOutlineCamera />
            </ProfileUpload>
          </ProfileAvatar>
        </Box>
        <EditableSpan />
      </Box>
    </Box>
  )
}
