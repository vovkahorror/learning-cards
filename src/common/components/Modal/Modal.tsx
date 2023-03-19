import React from 'react'

import { ModalWrapper, Overlay, Rectangle } from 'common/components/Modal/modal.styled'
import { useAppSelector } from 'common/hooks'

export const Modal = () => {
  const isModal = useAppSelector(state => state.app.isModal)

  return (
    <ModalWrapper isModal={isModal}>
      <Overlay />
      <Rectangle />
    </ModalWrapper>
  )
}
