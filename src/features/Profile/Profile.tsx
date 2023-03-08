import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai'

import profileImg from '../../assets/img/profile.png'

import { Button } from 'common/components/Button/Button'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { Box } from 'common/components/Layout/Box'
import { TextField } from 'common/components/TextField/TextField'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { ProfileAvatar, ProfileAvatarImg, ProfileUpload } from 'features/Profile/profile.styled'

export const Profile = () => {
  const user = useAppSelector(state => state.auth.user)

  console.log(user)

  return (
    <>
      <Box display={'flex'} justifyContent={'center'}>
        <h1>Personal Information</h1>
      </Box>
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
      <EditableSpan label={'Nickname'} />
      <Box display={'flex'} flexDirection={'column'} gap={'24px'} mt={'4'} alignItems={'center'}>
        <TextField type={'text'}>j&johnson@gmail.com</TextField>
        <Button>Log out</Button>
      </Box>
    </>
  )
}
