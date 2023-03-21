import { FC } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import styled from 'styled-components'

import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { deletePackTC, editPackTC, fetchPacksTC } from 'features/packs/packsSlice'

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

export const PacksAction: FC<PackListActionType> = ({ user_id, pack_id, cardsCount }) => {
  const dispatch = useAppDispatch()
  const myId = useAppSelector(authSelectors.id)

  const removePack = async () => {
    await dispatch(deletePackTC(pack_id))
    dispatch(fetchPacksTC())
  }

  const editPack = (name: string) => {
    dispatch(editPackTC({ name, _id: pack_id }))
  }

  return (
    <>
      {user_id === myId ? (
        <>
          <IconDisable cardsCount={cardsCount}>
            <BsRocketTakeoffFill />
          </IconDisable>
          <Icon>
            <BsPencilFill onClick={() => editPack('Warszawa')} />
          </Icon>
          <Icon>
            <BsFillTrash3Fill onClick={removePack} />
          </Icon>
        </>
      ) : (
        <>
          <IconDisable cardsCount={cardsCount}>
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
}

type IconType = {
  cardsCount?: number
}
