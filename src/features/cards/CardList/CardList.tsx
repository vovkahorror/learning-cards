import React, { useEffect } from 'react'

import { Rate, Table } from 'rsuite'
import styled from 'styled-components'

import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { CardActions } from 'features/cards/CardList/CardActions'
import { EmptyCardListWrapper } from 'features/cards/CardList/EmptyCardList'
import { CardType } from 'features/cards/cardsAPI'
import { getCardsDataTC, setSort, SortColumnType, SortType } from 'features/cards/cardsSlice'
import { updateGradeTC } from 'features/learn/learnSlice'

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
    dispatch(updateGradeTC({ card_id: _id, grade }))
  }

  const handleSortColumn = (sortColumn: SortColumnType, sortType: SortType) => {
    dispatch(setSort({ sortColumn, sortType }))
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
              />
            )}
          </Cell>
        </Column>

        {isMyPack && (
          <Column width={80}>
            <StyledHeader>{}</StyledHeader>
            <Cell style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              {rowData => (
                <CardActions
                  _id={rowData._id}
                  question={rowData.question}
                  answer={rowData.answer}
                />
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
