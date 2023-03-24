import { useEffect, useState } from 'react'

import { CloseIcon, InfoText, SnackbarWrapper } from './snackbar.styled'

import { appSelectors } from 'app'
import { setInfoSnackbar, VariantsSnackbarType } from 'app/appSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'

export const Snackbar = () => {
  const dispatch = useAppDispatch()
  const infoText = useAppSelector<string | null>(appSelectors.infoSnackbarText)
  const infoVariant = useAppSelector<VariantsSnackbarType | undefined>(
    appSelectors.infoSnackbarVariant
  )
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (infoText) {
      setOpen(true)
      // delay before closing
      setTimeout(() => handleClose(), 3000)
    }
  }, [infoText])

  const handleClose = () => {
    setOpen(false)
    //delay time when clicking on the close icon (for smooth animation)
    setTimeout(() => dispatch(setInfoSnackbar({ text: null })), 300)
  }

  return (
    <SnackbarWrapper isActive={open} variant={infoVariant}>
      <InfoText>{infoText}</InfoText>
      <CloseIcon variant={infoVariant} onClick={handleClose}></CloseIcon>
    </SnackbarWrapper>
  )
}
