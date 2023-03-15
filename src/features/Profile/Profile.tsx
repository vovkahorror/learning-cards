import React from 'react'

import { AiOutlineCamera } from 'react-icons/ai'

import profileImg from '../../assets/img/profile.png'

import { Button } from 'common/components/Button/Button'
import { Card } from 'common/components/Card/Cards'
import { EditableSpan } from 'common/components/EditableSpan/EditableSpan'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { logoutTC, setRegisterSuccess, updateUserName } from 'features/auth/authSlice'
import { ProfileAvatar, ProfileAvatarImg, ProfileUpload } from 'features/Profile/profile.styled'

export const Profile = () => {
  const user = useAppSelector(state => state.auth.user)
  const dispatch = useAppDispatch()

  const onLogout = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }

  const setNewName = (newName: string) => {
    dispatch(updateUserName({ name: newName }))
  }

  return (
    <Box display={'flex'} justifyContent={'center'}>
      <div>
        <Box display={'flex'} justifyContent={'center'}>
          <h2>Personal Information</h2>
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

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'15px'}>
          <EditableSpan label={'Nickname'} value={user.name} onChange={setNewName} />
          <p>{user.email}</p>
        </Box>

        <Box display={'flex'} flexDirection={'column'} gap={'24px'} mt={'4'} alignItems={'center'}>
          <Button onClick={onLogout}>Log out</Button>
        </Box>
      </div>
    </Box>
  )
}
