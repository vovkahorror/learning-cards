import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Table } from 'rsuite'

import { appSelectors } from 'app'
import { Box } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsSelectors } from 'features/packs'
import { PacksAction } from 'features/packs/PackList/PacksAction'
import { CardPacksType } from 'features/packs/packsAPI'
import { setSearchParams } from 'features/packs/packsSlice'
import { PATH } from 'pages/path'

const { Column, HeaderCell, Cell } = Table

type SortType = 'asc' | 'desc' | undefined
type SortColumnType = string | undefined

export const PackList = () => {
  const data = useAppSelector<CardPacksType[]>(packsSelectors.cardPacks)
  const statusLoading = useAppSelector(appSelectors.statusLoading)
  const sortPacks = useAppSelector(packsSelectors.sortPacks)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [sortColumn, setSortColumn] = useState<SortColumnType>(undefined)
  const [sortType, setSortType] = useState<SortType>(undefined)

  useEffect(() => {
    if (sortColumn && sortType) {
      // с сервара приходят и серверу отправляются 0 и 1, а либа даёт asc и desc
      sortType === 'asc' && dispatch(setSearchParams({ sortPacks: `0${sortColumn}` }))
      sortType === 'desc' && dispatch(setSearchParams({ sortPacks: `1${sortColumn}` }))
    }
  }, [sortColumn, sortType])

  useEffect(() => {
    // для сброса стрелочек в таблице при нажатии на кнопку clear
    if (!sortPacks) {
      setSortColumn(undefined)
      setSortType(undefined)
    }
  }, [sortPacks])

  const handleSortColumn = (sortColumn: SortColumnType, sortType: SortType) => {
    setSortColumn(sortColumn)
    setSortType(sortType)
  }

  return (
    <Box mt="3">
      <Table
        loading={statusLoading === 'local'}
        height={500}
        width={1080}
        data={data}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        style={{ borderRadius: '10px' }}
      >
        <Column width={200} align="left" fixed sortable={statusLoading !== 'local'}>
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

        <Column width={200} sortable={statusLoading !== 'local'}>
          <HeaderCell>Cards</HeaderCell>
          <Cell dataKey="cardsCount" />
        </Column>

        <Column width={200} sortable={statusLoading !== 'local'}>
          <HeaderCell>Last Updated</HeaderCell>
          <Cell dataKey="updated">
            {rowData => new Date(rowData.updated).toLocaleDateString('uk-UA')}
          </Cell>
        </Column>

        <Column width={240} sortable={statusLoading !== 'local'}>
          <HeaderCell>Created by</HeaderCell>
          <Cell dataKey="user_name" />
        </Column>

        <Column width={240}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {rowData => (
              <PacksAction
                user_id={rowData.user_id}
                pack_id={rowData._id}
                cardsCount={rowData.cardsCount}
                name={rowData.name}
              />
            )}
          </Cell>
        </Column>
      </Table>
    </Box>
  )
}
