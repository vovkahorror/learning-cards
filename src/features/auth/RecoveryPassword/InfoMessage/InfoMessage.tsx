import { useNavigate } from 'react-router-dom'

import { Button, Box } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { setRecovery } from 'features/auth/authSlice'
import {
  EmailIcon,
  InfoDescription,
} from 'features/auth/RecoveryPassword/InfoMessage/infoMessage.styled'
import { PATH } from 'pages/path'

export const InfoMessage = () => {
  const userEmail = useAppSelector<string>(authSelectors.userEmailForEmail)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickHandler = () => {
    dispatch(setRecovery(false))
    navigate(PATH.LOGIN)
  }

  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Check Email</h1>
      </Box>
      <EmailIcon />
      <InfoDescription>We’ve sent an Email with instructions to {userEmail}</InfoDescription>
      <Button fullWidth onClick={onClickHandler}>
        Back to login
      </Button>
    </>
  )
}
