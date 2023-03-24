import { FC, useState } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { packsSelectors } from '..'

import { PortalModal } from 'common/components/PortalModal/PortalModal'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { DataModal } from 'features/packs/PackList/DataModal'
import { deletePackTC, editPackTC } from 'features/packs/packsSlice'

export const Icon = styled.span<IconType>`
  margin-right: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: darkred;
  }
`

const IconDisable = styled(Icon)`
  pointer-events: ${({ cardsCount }) => (cardsCount ? 'all' : 'none')};
  opacity: ${({ cardsCount }) => (cardsCount ? 'none' : '0.4')};
`

export const PacksAction: FC<PackListActionType> = ({ user_id, pack_id, cardsCount, name }) => {
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

  const deletePack = () => {
    dispatch(deletePackTC(pack_id))
  }
  const editPack = (name: string, isPrivate: boolean) => {
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
          addEditPack={editPack}
          deletePack={deletePack}
          title={title}
          isPrivatePack={isPrivatePack}
        />
      </PortalModal>
      {user_id === myId ? (
        <>
          <IconDisable cardsCount={cardsCount}>
            <BsRocketTakeoffFill />
          </IconDisable>
          <Icon>
            <BsPencilFill onClick={() => handlerOpenModal('Edit pack')} />
          </Icon>
          <Icon>
            <BsFillTrash3Fill onClick={() => handlerOpenModal('Delete pack')} />
          </Icon>
        </>
      ) : (
        <>
          <IconDisable cardsCount={cardsCount} onClick={handlerNavigateToLearn}>
            <BsRocketTakeoffFill />
          </IconDisable>
        </>
      )}
    </>
  )
}

type PackListActionType = {
  user_id: string
  pack_id: string
  cardsCount: number
  name: string
}

type IconType = {
  cardsCount?: number
}
