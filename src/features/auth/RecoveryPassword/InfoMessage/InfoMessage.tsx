import { EmailIcon, InfoDescription } from './infoMessage.styled'

import { CustomLink } from 'common/components/CustomLink/CustomLink'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { setRecovery } from 'features/auth/authSlice'
import { PATH } from 'pages/path'

export const InfoMessage = () => {
  const userEmail = useAppSelector<string>(state => state.auth.userEmail)
  const dispatch = useAppDispatch()

  const onClickHandler = () => {
    dispatch(setRecovery(false))
  }

  return (
    <Box style={{ width: '413px' }}>
      <InfoDescription style={{ fontSize: '30px' }}>Check Email</InfoDescription>
      <EmailIcon />
      <InfoDescription>We’ve sent an Email with instructions to {userEmail}</InfoDescription>
      <CustomLink variant={'contained'} to={PATH.LOGIN}>
        Back to login
      </CustomLink>
    </Box>
  )
}
