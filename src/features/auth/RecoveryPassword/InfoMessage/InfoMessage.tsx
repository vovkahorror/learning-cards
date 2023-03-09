import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { setRecovery } from 'features/auth/authSlice'
import {
  EmailIcon,
  InfoDescription,
} from 'features/auth/RecoveryPassword/InfoMessage/infoMessage.styled'
import { PATH } from 'pages/path'

export const InfoMessage = () => {
  const userEmail = useAppSelector<string>(state => state.auth.userEmail)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onClickHandler = () => {
    dispatch(setRecovery(false))
    navigate(`${PATH.LOGIN}`)
  }

  return (
    <Box style={{ width: '347px' }}>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Check Email</h1>
      </Box>
      <EmailIcon />
      <InfoDescription>We’ve sent an Email with instructions to {userEmail}</InfoDescription>
      <Button fullWidth onClick={onClickHandler}>
        Back to login
      </Button>
    </Box>
  )
}
