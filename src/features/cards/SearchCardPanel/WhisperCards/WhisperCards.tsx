import React, { useRef, useState } from 'react'

import { IoEllipsisVerticalCircle } from 'react-icons/io5'
import { Whisper } from 'rsuite'

import { Box } from 'common/components'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppDispatch } from 'common/hooks'
import { CardsPopover } from 'features/cards/SearchCardPanel/WhisperCards/CardsPopover'
import { DataModal } from 'features/packs/PackList/DataModal'
import { deletePackTC, editPackTC } from 'features/packs/packsSlice'

export const WhisperCards = ({
  cardsPack_id,
  packName,
  isPrivatePack,
  navigateToLearn,
}: WhisperCardsPropsType) => {
  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

  const handlerOpenModal = (title: string) => {
    setShowModal(true)
    setTitle(title)
  }

  const deletePack = () => {
    if (cardsPack_id) {
      dispatch(deletePackTC(cardsPack_id))
    }
  }

  const editPack = (name: string, isPrivate: boolean) => {
    if (cardsPack_id) {
      dispatch(editPackTC({ name, private: isPrivate, _id: cardsPack_id }))
    }
  }

  const triggerRef = useRef<any>(null)
  const close = () => triggerRef.current?.close()

  return (
    <>
      <Whisper
        trigger="click"
        placement={'bottom'}
        ref={triggerRef}
        speaker={
          <CardsPopover
            navigateToLearn={navigateToLearn}
            handlerOpenModal={handlerOpenModal}
            close={close}
          />
        }
      >
        <Box display={'flex'} alignItems={'center'}>
          <IoEllipsisVerticalCircle size={22} color={'white'} cursor={'pointer'} />
        </Box>
      </Whisper>

      <PortalModal title={title} show={showModal} setShow={setShowModal}>
        <DataModal
          setShowModal={setShowModal}
          nameOfPack={packName}
          addEditPack={editPack}
          deletePack={deletePack}
          title={title}
          isPrivatePack={isPrivatePack}
        />
      </PortalModal>
    </>
  )
}

type WhisperCardsPropsType = {
  cardsPack_id?: string
  packName?: string
  isPrivatePack?: boolean
  navigateToLearn: () => void
}
