import React, { FC } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import styled from 'styled-components'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { deletePackTC, editPackTC } from 'features/packs/packsSlice'

const Icon = styled.span`
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

export const PacksAction: FC<PackListActionType> = ({ user_id, pack_id, cardsCount }) => {
  const dispatch = useAppDispatch()
  const myId = useAppSelector(state => state.auth.user._id)

  const removePack = () => {
    dispatch(deletePackTC(pack_id))
  }

  const editPack = (name: string) => {
    dispatch(editPackTC({ name, _id: pack_id }))
  }

  return (
    <>
      {user_id === myId ? (
        <>
          <Icon style={!cardsCount ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
            <BsRocketTakeoffFill />
          </Icon>
          <Icon>
            <BsPencilFill onClick={() => editPack('Warszawa')} />
          </Icon>
          <Icon>
            <BsFillTrash3Fill onClick={removePack} />
          </Icon>
        </>
      ) : (
        <>
          <Icon style={!cardsCount ? { pointerEvents: 'none', opacity: '0.4' } : {}}>
            <BsRocketTakeoffFill />
          </Icon>
        </>
      )}
    </>
  )
}

type PackListActionType = {
  user_id: string
  pack_id: string
  cardsCount: number
}
