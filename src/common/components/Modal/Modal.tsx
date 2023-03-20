import { MouseEvent, ReactNode, useEffect } from 'react'

import FocusLock from 'react-focus-lock'

import { ModalContainer, Overlay } from './styled'

type PropsType = {
  setShow: () => void
  children: ReactNode
}

export const Modal = ({ setShow, children }: PropsType) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handlerKeyPress)

    return () => {
      document.body.style.overflow = 'unset'
      document.removeEventListener('keydown', handlerKeyPress)
    }
  }, [])

  const handlerClickOutside = () => setShow()
  const handlerClickModalContainer = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()
  const handlerCloseModal = () => setShow()
  const handlerKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') setShow()
  }

  return (
    <FocusLock>
      <Overlay onClick={handlerClickOutside}>
        <ModalContainer onClick={handlerClickModalContainer}>
          <div>Im a modal dialog</div>
          {children}
          <button tabIndex={1} onClick={handlerCloseModal}>
            Close
          </button>
        </ModalContainer>
      </Overlay>
    </FocusLock>
  )
}
