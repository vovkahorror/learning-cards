import { ReactNode } from 'react'

import { createPortal } from 'react-dom'

import { Modal } from 'common/components/Modal/Modal'

type PropsType = {
  show: boolean
  setShow: (show: boolean) => void
  title: string
  children: ReactNode
}

export const PortalModal = ({ show, setShow, title, children }: PropsType) => {
  const handlerCloseModal = () => setShow(false)

  if (!show) {
    return null
  }

  return createPortal(
    <Modal setShow={handlerCloseModal} title={title}>
      {children}
    </Modal>,
    document.body
  )
}
