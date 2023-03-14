import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Table } from 'rsuite'

import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { PacksAction } from 'features/packs/PackList/PacksAction'
import { CardPacksType } from 'features/packs/packsAPI'
import { setSearchParams } from 'features/packs/packsSlice'
import { PATH } from 'pages/path'

const { Column, HeaderCell, Cell } = Table

type SortType = 'asc' | 'desc' | undefined
type SortColumnType = string | undefined

export const PackList = () => {
  const navigate = useNavigate()
  const data = useAppSelector<CardPacksType[]>(state => state.packs.cardPacks)
  const dispatch = useAppDispatch()
  const [sortColumn, setSortColumn] = useState<SortColumnType>(undefined)
  const [sortType, setSortType] = useState<SortType>(undefined)

  useEffect(() => {
    if (sortColumn && sortType) {
      sortType === 'asc' && dispatch(setSearchParams({ sortPacks: `0${sortColumn}` }))
      sortType === 'desc' && dispatch(setSearchParams({ sortPacks: `1${sortColumn}` }))
    }
  }, [sortColumn, sortType])

  const handleSortColumn = (sortColumn: SortColumnType, sortType: SortType) => {
    setSortColumn(sortColumn)
    setSortType(sortType)
  }

  return (
    <Box mt="3">
      <Table
        height={500}
        data={data}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
      >
        <Column width={200} align="center" fixed sortable>
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

        <Column width={200} sortable>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={200} sortable>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell dataKey="updated">
            {rowData => new Date(rowData.updated).toLocaleDateString('uk-UA')}
          </Cell>
        </Column>

        <Column width={250} sortable>
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
