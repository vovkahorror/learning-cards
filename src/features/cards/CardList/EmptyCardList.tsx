import React, { useState } from 'react'

import styled from 'styled-components'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { CardModal } from 'features/cards/CardList/CardModal'

export const EmptyCardList = ({ isMyPack, addNewCard }: EmptyCardListPropsType) => {
  const [showModal, setShowModal] = useState(false)

  const handlerOpenModal = () => setShowModal(true)

  return (
    <>
      <EmptyCardListWrapper>
        <p>This pack is empty. {isMyPack && <span>Click add new card to fill this pack</span>}</p>
        {isMyPack && <Button onClick={handlerOpenModal}>Add new card</Button>}
      </EmptyCardListWrapper>

      <PortalModal title={'Add new card'} show={showModal} setShow={setShowModal}>
        <CardModal setShowModal={setShowModal} addEditCard={addNewCard} />
      </PortalModal>
    </>
  )
}

export const EmptyCardListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 50vh;
`

type EmptyCardListPropsType = {
  isMyPack: boolean
  addNewCard: (format: string | null, question: string, answer: string) => void
}
