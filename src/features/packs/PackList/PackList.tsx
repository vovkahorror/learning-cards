import { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { Table } from 'rsuite'

import { appSelectors } from 'app'
import packCover from 'assets/img/packCover.png'
import { Box } from 'common/components'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { packsSelectors } from 'features/packs'
import { PacksAction } from 'features/packs/PackList/PacksAction'
import { CoverPackImg } from 'features/packs/PackList/styled'
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

  const handlerSortColumn = (sortColumn: SortColumnType, sortType: SortType) => {
    setSortColumn(sortColumn)
    setSortType(sortType)
  }
  const handlerNavigateToCards = (id: string) => {
    navigate(`${PATH.CARDS}/${id}`)
  }

  return (
    <Box mt="3">
      <Table
        loading={statusLoading === 'local'}
        height={500}
        width={1200}
        wordWrap="break-word"
        data={data}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handlerSortColumn}
        style={{ borderRadius: '10px' }}
      >
        <Column width={340} align="left" fixed sortable={statusLoading !== 'local'}>
          <HeaderCell>Name</HeaderCell>
          <Cell dataKey="name">
            {rowData => (
              <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                <CoverPackImg
                  onClick={() => handlerNavigateToCards(rowData._id)}
                  src={rowData.deckCover || packCover}
                  alt="#"
                />
                <span
                  onClick={() => handlerNavigateToCards(rowData._id)}
                  style={{ cursor: 'pointer' }}
                >
                  {rowData.name}
                </span>
              </Box>
            )}
          </Cell>
        </Column>

        <Column width={180} sortable={statusLoading !== 'local'}>
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

        <Column width={140}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {rowData => (
              <PacksAction
                user_id={rowData.user_id}
                pack_id={rowData._id}
                cardsCount={rowData.cardsCount}
                name={rowData.name}
                isPrivate={rowData.private}
              />
            )}
          </Cell>
        </Column>

        <Column width={100}>
          <HeaderCell>Private</HeaderCell>
          <Cell>{rowData => rowData.private && <p>private</p>}</Cell>
        </Column>
      </Table>
    </Box>
  )
}
