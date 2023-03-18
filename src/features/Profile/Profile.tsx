import { AiOutlineCamera } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

import profileImg from '../../assets/img/profile.png'

import { Button, Box, EditableSpan, BackToPacks } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { logoutTC, setRegisterSuccess, updateUserName } from 'features/auth/authSlice'
import { ProfileAvatar, ProfileAvatarImg, ProfileUpload } from 'features/Profile/profile.styled'
import { PATH } from 'pages/path'

export const Profile = () => {
  const name = useAppSelector(authSelectors.name)
  const email = useAppSelector(authSelectors.name)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handlerLogout = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }

  const setNewName = (newName: string) => {
    dispatch(updateUserName({ name: newName }))
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
              <ProfileAvatarImg>
                <img src={profileImg} alt="" />
              </ProfileAvatarImg>
              <ProfileUpload>
                <AiOutlineCamera />
              </ProfileUpload>
            </ProfileAvatar>
          </Box>

          <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'15px'}>
            <EditableSpan label={'Nickname'} value={name} onChange={setNewName} />
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
