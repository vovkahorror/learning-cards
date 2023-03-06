import { useEffect, useState } from 'react'

import { CloseIcon, InfoText, SnackbarWrapper } from './snackbar.styled'

import { setInfoSnackbar, VariantsSnackbarType } from 'app/appSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'

export const Snackbar = () => {
  const dispatch = useAppDispatch()
  const infoMessage = useAppSelector<string | null>(state => state.app.infoSnackbar.message)
  const infoVariant = useAppSelector<VariantsSnackbarType | undefined>(
    state => state.app.infoSnackbar.variant
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (infoMessage) {
      setOpen(true)
      setTimeout(() => handleClose(), 3000)
    }
  }, [infoMessage])

  const handleClose = () => {
    setOpen(false)
    setTimeout(() => dispatch(setInfoSnackbar({ message: null })), 300)
  }

  return (
    <SnackbarWrapper isActive={open} variant={infoVariant}>
      <InfoText>{infoMessage}</InfoText>
      <CloseIcon variant={infoVariant} onClick={handleClose}></CloseIcon>
    </SnackbarWrapper>
  )
}
