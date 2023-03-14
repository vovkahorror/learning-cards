import React from 'react'

import { useNavigate } from 'react-router-dom'
import { Table } from 'rsuite'

import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { PacksAction } from 'features/packs/PackList/PacksAction'
import { CardPacksType } from 'features/packs/packsAPI'
import { PATH } from 'pages/path'

const { Column, HeaderCell, Cell } = Table

export const PackList = () => {
  const navigate = useNavigate()
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)

  return (
    <Box mt="3">
      <Table height={500} data={data}>
        <Column width={200} align="center" fixed>
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

        <Column width={200}>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={200}>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell>{rowData => new Date(rowData.updated).toLocaleDateString('uk-UA')}</Cell>
        </Column>

        <Column width={250}>
          <HeaderCell>Created by</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={250}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>{rowData => <PacksAction user_id={rowData.user_id} pack_id={rowData._id} />}</Cell>
        </Column>
      </Table>
    </Box>
  )
}
