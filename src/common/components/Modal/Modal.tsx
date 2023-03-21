import { MouseEvent, ReactNode, useEffect } from 'react'

import FocusLock from 'react-focus-lock'
import { AiOutlineClose } from 'react-icons/ai'

import { ModalContainer, Overlay, PortalTitle, Line, CloseButton } from './styled'

import { Box } from 'common/components'

type PropsType = {
  setShow: () => void
  title: string
  children: ReactNode
}

export const Modal = ({ setShow, title, children }: PropsType) => {
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
    <Overlay onClick={handlerClickOutside}>
      <FocusLock>
        <ModalContainer onClick={handlerClickModalContainer}>
          <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <PortalTitle>{title}</PortalTitle>
            <CloseButton onClick={handlerCloseModal}>
              <AiOutlineClose size={'18px'} />
            </CloseButton>
          </Box>
          <Line />

          {children}
        </ModalContainer>
      </FocusLock>
    </Overlay>
  )
}
