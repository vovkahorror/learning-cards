import { useEffect, useState } from 'react'

import styled from 'styled-components'

import { setInfoMessage } from 'app/appSlice'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'

export const Snackbar = () => {
  const infoMessage = useAppSelector<string | null>(state => state.app.infoMessage)
  const dispatch = useAppDispatch()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (infoMessage) {
      setOpen(true)
    }
  }, [infoMessage])

  console.log(infoMessage)

  const handleClose = () => {
    setOpen(false)

    setTimeout(() => {
      dispatch(setInfoMessage(null))
    }, 300)
  }

  if (infoMessage) {
    setTimeout(() => handleClose(), 3000)
  }

  return (
    <SnackbarWrapper isActive={open}>
      {infoMessage}
      <button onClick={handleClose}>x</button>
    </SnackbarWrapper>
  )
}

const SnackbarWrapper = styled.div<{ isActive: boolean }>`
  position: fixed;
  left: 10px;
  bottom: 10px;

  width: fit-content;
  padding: 20px;
  background-color: green;
  transform: ${p => (p.isActive ? 'scale(1)' : 'scale(0)')};
  transition: 0.3s;
`
