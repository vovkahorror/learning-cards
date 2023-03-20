import { ReactNode } from 'react'

import { createPortal } from 'react-dom'

import { Modal } from 'common/components/Modal/Modal'

type PropsType = {
  show: boolean
  setShow: (show: boolean) => void
  children: ReactNode
}

export const PortalModal = ({ show, setShow, children }: PropsType) => {
  const handlerCloseModal = () => setShow(false)

  return (
    <>
      {show && createPortal(<Modal setShow={handlerCloseModal}>{children}</Modal>, document.body)}
    </>
  )
}
