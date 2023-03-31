import { useNavigate } from 'react-router-dom'
import { Dropdown, IconButton } from 'rsuite'

import { ReactComponent as LogOutIcon } from 'assets/img/logOutLogo.svg'
import profileImg from 'assets/img/profile.png'
import { ReactComponent as ProfileIcon } from 'assets/img/profileLogo.svg'
import { Box } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { logoutTC, setRegisterSuccess } from 'features/auth/authSlice'
import {
  DropdownItem,
  ProfileHeaderAvatarImg,
  ProfileHeaderName,
} from 'features/Profile/profile.styled'
import { PATH } from 'pages/path'

const renderIconButton = (props: any, ref: any) => {
  const userAvatar = useAppSelector(authSelectors.userAvatar)

  return (
    <IconButton
      {...props}
      ref={ref}
      icon={<ProfileHeaderAvatarImg src={userAvatar || profileImg} alt="" />}
      circle
      style={{ width: '36px', height: '36px' }}
      appearance="primary"
    />
  )
}

export const ProfileHeader = () => {
  const name = useAppSelector(authSelectors.name)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const handlerNavigateToProfile = () => navigate(PATH.PROFILE)
  const handlerLogOut = () => {
    dispatch(logoutTC())
    dispatch(setRegisterSuccess(false))
  }

  return (
    <Box display={'flex'} alignItems={'center'} style={{ position: 'relative' }}>
      <ProfileHeaderName>{name}</ProfileHeaderName>
      <Dropdown placement="bottomEnd" renderToggle={renderIconButton}>
        <DropdownItem onClick={handlerNavigateToProfile} icon={<ProfileIcon />}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={handlerLogOut} icon={<LogOutIcon />}>
          Logout
        </DropdownItem>
      </Dropdown>
    </Box>
  )
}
