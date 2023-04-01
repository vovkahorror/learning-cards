import { useState } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { Icon, LearnIcon } from './styled'

import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { AddEditPackModal } from 'features/packs/PackList/Modals/AddEditPackModal'
import { DeletePackModal } from 'features/packs/PackList/Modals/DeletePackModal'
import { editPackTC } from 'features/packs/packsSlice'

type PropsType = {
  user_id: string
  pack_id: string
  cardsCount: number
  name: string
  isPrivate: boolean
}

export const PacksAction = ({ user_id, pack_id, cardsCount, name, isPrivate }: PropsType) => {
  const myId = useAppSelector(authSelectors.id)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [typeModal, setTypeModal] = useState('delete')

  const handlerOpenModal = (title: string) => {
    setShowModal(true)
    setTypeModal(title)
  }
  const handlerNavigateToLearn = () => {
    navigate(`/learn/${pack_id}`)
  }
  const handlerEditPack = (name: string, isPrivate: boolean, deckCover?: string | null) => {
    dispatch(editPackTC({ name, private: isPrivate, _id: pack_id, deckCover }))
  }

  return (
    <>
      <PortalModal title={typeModal} show={showModal} setShow={setShowModal}>
        {typeModal === 'Delete pack' && (
          <DeletePackModal pack_id={pack_id} nameOfPack={name} setShowModal={setShowModal} />
        )}
        {typeModal === 'Edit pack' && (
          <AddEditPackModal
            nameOfPack={name}
            setShowModal={setShowModal}
            isPrivate={isPrivate}
            addEditPack={handlerEditPack}
          />
        )}
      </PortalModal>

      <LearnIcon cardsCount={cardsCount} onClick={handlerNavigateToLearn}>
        <BsRocketTakeoffFill />
      </LearnIcon>

      {user_id === myId && (
        <>
          <Icon>
            <BsPencilFill onClick={() => handlerOpenModal('Edit pack')} />
          </Icon>
          <Icon>
            <BsFillTrash3Fill onClick={() => handlerOpenModal('Delete pack')} />
          </Icon>
        </>
      )}
    </>
  )
}
