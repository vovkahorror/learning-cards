import React, { useEffect } from 'react'

import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'
import { Rate, Table } from 'rsuite'
import styled from 'styled-components'

import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { EmptyCardListWrapper } from 'features/cards/CardList/EmptyCardList'
import { CardType } from 'features/cards/cardsAPI'
import {
  deleteCardTC,
  getCardsDataTC,
  setSort,
  SortColumnType,
  SortType,
  updateCardTC,
} from 'features/cards/cardsSlice'
import { Icon } from 'features/packs/PackList/PacksAction'

type CardListPropsType = {
  cardsPack_id?: string
  cards: CardType[]
  isMyPack: boolean
}

const { Column, HeaderCell, Cell } = Table

export const CardList = ({ cardsPack_id, cards, isMyPack }: CardListPropsType) => {
  const dispatch = useAppDispatch()

  const sortColumn = useAppSelector(state => state.cards.sort.sortColumn)
  const sortType = useAppSelector(state => state.cards.sort.sortType)
  // const [sortColumn, setSortColumn] = useState<SortColumnType>(undefined)
  // const [sortType, setSortType] = useState<SortType>(undefined)

  useEffect(() => {
    if (cardsPack_id && sortColumn && sortType) {
      dispatch(getCardsDataTC({ cardsPack_id }))
    }
  }, [sortColumn, sortType])

  useEffect(() => {
    return () => {
      dispatch(setSort({ sortColumn: undefined, sortType: undefined }))
    }
  }, [])

  const renderEmpty = () => (
    <EmptyCardListWrapper>No cards matching your request</EmptyCardListWrapper>
  )

  const gradeHandler = (_id: string) => (grade: number) => {
    dispatch(updateCardTC({ _id, grade }))
  }

  const updateCard = (_id: string) => {
    dispatch(updateCardTC({ _id, question: 'UPDATED QUESTION', answer: 'UPDATED ANSWER' }))
  }

  const deleteCard = (_id: string) => {
    dispatch(deleteCardTC(_id))
  }

  const handleSortColumn = (sortColumn: SortColumnType, sortType: SortType) => {
    dispatch(setSort({ sortColumn, sortType }))
    // setSortColumn(sortColumn)
    // setSortType(sortType)
  }

  return (
    <Box mt="3">
      <Table
        width={1080}
        height={400}
        data={cards}
        wordWrap={'break-word'}
        renderEmpty={renderEmpty}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        autoHeight
      >
        <Column flexGrow={1} align="left" fixed sortable>
          <StyledHeader>Question</StyledHeader>
          <Cell dataKey="question" />
        </Column>

        <Column flexGrow={1} align="left" sortable>
          <StyledHeader>Answer</StyledHeader>
          <Cell dataKey="answer" />
        </Column>

        <Column width={180} sortable>
          <StyledHeader>Last Updated</StyledHeader>
          <Cell dataKey="updated">
            {rowData => (
              <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                <span>{new Date(rowData.updated).toLocaleDateString('uk-UA')}</span>
                <sup>{new Date(rowData.updated).toLocaleTimeString('uk-UA')}</sup>
              </Box>
            )}
          </Cell>
        </Column>

        <Column width={150} sortable>
          <StyledHeader>Grade</StyledHeader>
          <Cell dataKey="grade">
            {rowData => (
              <Rate
                value={rowData.grade}
                max={5}
                size={'xs'}
                style={{ color: '#FFC700' }}
                allowHalf
                onChange={gradeHandler(rowData._id)}
                readOnly={!isMyPack}
              />
            )}
          </Cell>
        </Column>

        {isMyPack && (
          <Column width={80}>
            <StyledHeader>{}</StyledHeader>
            <Cell style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {rowData => (
                <Box display={'flex'}>
                  <Icon>
                    <BsPencilFill onClick={() => updateCard(rowData._id)} />
                  </Icon>
                  <Icon>
                    <BsFillTrash3Fill onClick={() => deleteCard(rowData._id)} />
                  </Icon>
                </Box>
              )}
            </Cell>
          </Column>
        )}
      </Table>
    </Box>
  )
}

const StyledHeader = styled(HeaderCell)`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  background: #efefef;
`
