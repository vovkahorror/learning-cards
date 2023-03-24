import { useNavigate } from 'react-router-dom'
import { Dropdown, IconButton } from 'rsuite'

import { ReactComponent as LogOutIcon } from 'assets/img/logOutLogo.svg'
import profileImg from 'assets/img/profile.png'
import { ReactComponent as ProfileIcon } from 'assets/img/profileLogo.svg'
import { Box } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { logoutTC, setRegisterSuccess } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

const renderIconButton = (props: any, ref: any) => {
  return (
    <IconButton
      {...props}
      ref={ref}
      icon={<img src={profileImg} alt="" style={{ width: '36px', height: '36px' }} />}
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
      <p style={{ color: 'white', marginRight: '10px' }}>{name}</p>
      <Dropdown placement="bottomEnd" renderToggle={renderIconButton}>
        <Dropdown.Item
          onClick={handlerNavigateToProfile}
          icon={<ProfileIcon />}
          style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}
        >
          Profile
        </Dropdown.Item>
        <Dropdown.Item
          onClick={handlerLogOut}
          icon={<LogOutIcon />}
          style={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}
        >
          Logout
        </Dropdown.Item>
      </Dropdown>
    </Box>
  )
}
