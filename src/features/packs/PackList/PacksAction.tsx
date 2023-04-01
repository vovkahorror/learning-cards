import { useState } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { packsSelectors } from '..'

import { Icon, IconDisable } from './styled'

import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { DataModal } from 'features/packs/PackList/DataModal'
import { deletePackTC, editPackTC } from 'features/packs/packsSlice'

type PackListActionType = {
  user_id: string
  pack_id: string
  cardsCount: number
  name: string
}

export const PacksAction = ({ user_id, pack_id, cardsCount, name }: PackListActionType) => {
  const myId = useAppSelector(authSelectors.id)
  const isPrivatePack = useAppSelector(packsSelectors.cardPacks).find(
    pack => pack._id === pack_id
  )?.private

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const [title, setTitle] = useState('')

  const handlerOpenModal = (title: string) => {
    setShowModal(true)
    setTitle(title)
  }
  const handlerDeletePack = () => {
    dispatch(deletePackTC(pack_id))
  }
  const handlerEditPack = (name: string, isPrivate: boolean) => {
    dispatch(editPackTC({ name, private: isPrivate, _id: pack_id }))
  }
  const handlerNavigateToLearn = () => {
    navigate(`/learn/${pack_id}`)
  }

  return (
    <>
      <PortalModal title={title} show={showModal} setShow={setShowModal}>
        <DataModal
          setShowModal={setShowModal}
          nameOfPack={name}
          addEditPack={handlerEditPack}
          deletePack={handlerDeletePack}
          title={title}
          isPrivatePack={isPrivatePack}
        />
      </PortalModal>

      <IconDisable cardsCount={cardsCount} onClick={handlerNavigateToLearn}>
        <BsRocketTakeoffFill />
      </IconDisable>

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
