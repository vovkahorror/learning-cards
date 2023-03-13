import React from 'react'

import { IoTrashOutline, IoPencil, IoSkull } from 'react-icons/io5'
import { Table } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardPacksType } from 'features/packs/packsAPI'
import { deletePackTC } from 'features/packs/packsSlice'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const dispatch = useAppDispatch()
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)
  const userId = useAppSelector(state => state.auth.user._id)

  const removePack = (id: string) => {
    dispatch(deletePackTC(id))
  }

  return (
    <div>
      <Table height={400} data={data}>
        <Column width={200} align="center" fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={200}>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell dataKey="updated" />
        </Column>

        <Column width={200}>
          <HeaderCell>Created by</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={200}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {rowData =>
              rowData.user_id !== userId && (
                <IoTrashOutline onClick={() => removePack(rowData._id)} />
              )
            }
          </Cell>
        </Column>
      </Table>
    </div>
  )
}
