import React, { useState } from 'react'

import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'

import { Box } from 'common/components'
import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppDispatch } from 'common/hooks'
import { CardModal, TitleType } from 'features/cards/CardList/CardModal'
import { deleteCardTC, updateCardTC } from 'features/cards/cardsSlice'
import { Icon } from 'features/packs/PackList/styled'

export const CardActions = ({ _id, question, questionImg, answer }: CardActionsPropsType) => {
  const dispatch = useAppDispatch()

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState<TitleType>('Edit card')

  const handlerOpenModal = (title: TitleType) => {
    setTitle(title)
    setShowModal(true)
  }

  const updateCard = (
    format: string | null,
    question: string,
    questionImg: string,
    answer: string
  ) => {
    if (format === 'Text') {
      questionImg = 'data:none'
    }
    dispatch(updateCardTC({ _id, question, questionImg, answer }))
  }

  const deleteCard = () => {
    dispatch(deleteCardTC(_id))
  }

  return (
    <>
      <PortalModal title={title} show={showModal} setShow={setShowModal}>
        <CardModal
          title={title}
          question={question}
          questionImg={questionImg}
          answer={answer}
          setShowModal={setShowModal}
          addEditCard={updateCard}
          deleteCard={deleteCard}
        />
      </PortalModal>
      <Box display={'flex'}>
        <Icon>
          <BsPencilFill onClick={() => handlerOpenModal('Edit card')} />
        </Icon>
        <Icon>
          <BsFillTrash3Fill onClick={() => handlerOpenModal('Delete card')} />
        </Icon>
      </Box>
    </>
  )
}

type CardActionsPropsType = {
  _id: string
  question: string
  questionImg: string
  answer: string
}
