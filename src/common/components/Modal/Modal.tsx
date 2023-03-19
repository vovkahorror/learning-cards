import React from 'react'

import { setModal } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { ModalWrapper, Overlay, Rectangle } from 'common/components/Modal/modal.styled'
import { useAppDispatch, useAppSelector } from 'common/hooks'

export const Modal = () => {
  const isModal = useAppSelector(state => state.app.isModal)
  const dispatch = useAppDispatch()

  const modalToggle = () => {
    dispatch(setModal(false))
  }

  return (
    <ModalWrapper isModal={isModal}>
      <Overlay />
      <Rectangle>
        <Box display="flex" justifyContent="space-around">
          <Button onClick={modalToggle} style={{ width: '130px' }} fullWidth={false}>
            Cancel
          </Button>
          <Button style={{ width: '130px' }} fullWidth={false}>
            Save
          </Button>
        </Box>
      </Rectangle>
    </ModalWrapper>
  )
}
