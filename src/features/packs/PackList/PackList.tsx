import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Table } from 'rsuite'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardPacksType } from 'features/packs/packsAPI'
import { PATH } from 'pages/path'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const navigate = useNavigate()
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)

  return (
    <div>
      <Table height={400} data={data}>
        <Column width={150} align="center" fixed>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name">
            {rowData => (
              <span
                onClick={() => navigate(`${PATH.CARDS}/${rowData._id}`)}
                style={{ cursor: 'pointer' }}
              >
                {rowData.name}
              </span>
            )}
          </Cell>
        </Column>

        <Column width={150}>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={150}>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell dataKey="updated" />
        </Column>

        <Column width={150}>
          <HeaderCell>Created by</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={100}>
          <HeaderCell>Actions</HeaderCell>
          <Cell dataKey="actions" />
        </Column>
      </Table>
    </div>
  )
}
