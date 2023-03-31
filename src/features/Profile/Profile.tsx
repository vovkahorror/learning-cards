import { useNavigate } from 'react-router-dom'

import profileImg from '../../assets/img/profile.png'

import { Button, Box, EditableSpan, BackToPacks } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { logoutTC, setRegisterSuccess, updateUserNameTC } from 'features/auth/authSlice'
import { ProfileAvatar, ProfileAvatarImg } from 'features/Profile/profile.styled'
import { UploadAvatar } from 'features/Profile/UploadAvatar'
import { PATH } from 'pages/path'

export const Profile = () => {
  const name = useAppSelector(authSelectors.name)
  const email = useAppSelector(authSelectors.name)
  const userAvatar = useAppSelector(authSelectors.userAvatar)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handlerLogout = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }
  const handlerUpdateName = (newName: string) => {
    dispatch(updateUserNameTC({ name: newName }))
  }
  const handlerNavigateToPackList = () => navigate(PATH.PACKS)

  return (
    <>
      <BackToPacks onClick={handlerNavigateToPackList} />
      <Box display={'flex'} justifyContent={'center'}>
        <div>
          <Box display={'flex'} justifyContent={'center'}>
            <h2>Personal Information</h2>
          </Box>

          <Box my={'4'}>
            <ProfileAvatar>
              <ProfileAvatarImg src={userAvatar || profileImg} alt="" />
              <UploadAvatar />
            </ProfileAvatar>
          </Box>

          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'15px'}>
            <EditableSpan label={'Nickname'} value={name} onChange={handlerUpdateName} />
            <p>{email}</p>
          </Box>

          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'24px'}
            mt={'4'}
            alignItems={'center'}
          >
            <Button onClick={handlerLogout}>Log out</Button>
          </Box>
        </div>
      </Box>
    </>
  )
}
