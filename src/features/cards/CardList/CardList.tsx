import React, { useEffect } from 'react'

import { Rate, Table } from 'rsuite'
import styled from 'styled-components'

import { appSelectors } from 'app'
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

  const statusLoading = useAppSelector(appSelectors.statusLoading)
  const sortColumn = useAppSelector(state => state.cards.sort.sortColumn)
  const sortType = useAppSelector(state => state.cards.sort.sortType)

  useEffect(() => {
    if (cardsPack_id && sortColumn && sortType) {
      dispatch(getCardsDataTC({ cardsPack_id }))
    }
  }, [sortColumn, sortType])

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
        loading={statusLoading === 'local'}
        autoHeight
        style={{ borderRadius: '10px' }}
      >
        <Column flexGrow={1} align="left" fixed sortable>
          <StyledHeader>Question</StyledHeader>
          <StyledCell dataKey="question">
            {rowData =>
              rowData.questionImg && rowData.questionImg !== 'data:none' ? (
                <img src={rowData.questionImg} alt="question image" />
              ) : (
                <span>{rowData.question}</span>
              )
            }
          </StyledCell>
        </Column>

        <Column flexGrow={1} align="left" sortable>
          <StyledHeader>Answer</StyledHeader>
          <StyledCell dataKey="answer" />
        </Column>

        <Column width={180} sortable>
          <StyledHeader>Last Updated</StyledHeader>
          <StyledCell dataKey="updated">
            {rowData => (
              <Box display={'flex'} alignItems={'center'} gap={'10px'}>
                <span>{new Date(rowData.updated).toLocaleDateString('uk-UA')}</span>
                <sup>{new Date(rowData.updated).toLocaleTimeString('uk-UA')}</sup>
              </Box>
            )}
          </StyledCell>
        </Column>

        <Column width={150} sortable>
          <StyledHeader>Grade</StyledHeader>
          <StyledCell dataKey="grade">
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
          </StyledCell>
        </Column>

        {isMyPack && (
          <Column width={80}>
            <StyledHeader>{}</StyledHeader>
            <StyledCell style={{ justifyContent: 'flex-end' }}>
              {rowData => (
                <CardActions
                  _id={rowData._id}
                  question={rowData.question}
                  questionImg={rowData.questionImg}
                  answer={rowData.answer}
                />
              )}
            </StyledCell>
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

const StyledCell = styled(Cell)`
  & * {
    display: flex;
    align-items: center;
    max-height: 300px;
  }
`
