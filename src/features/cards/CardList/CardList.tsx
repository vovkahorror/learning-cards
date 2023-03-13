import React from 'react'

import { Rate, Table } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardType } from 'features/cards/cardsAPI'
import { updateCardTC } from 'features/cards/cardsSlise'

const { Column, HeaderCell, Cell } = Table

export const CardList = () => {
  const dispatch = useAppDispatch()
  const cards = useAppSelector<CardType[]>(state => state.cards.cards)

  const gradeHandler = (_id: string) => (grade: number) => {
    dispatch(updateCardTC({ _id, grade }))
  }

  return (
    <Table height={400} data={cards}>
      <Column width={150} align="center" fixed>
        <HeaderCell>Question</HeaderCell>
        <Cell dataKey="question" />
      </Column>

      <Column width={150}>
        <HeaderCell>Answer</HeaderCell>
        <Cell dataKey="answer" />
      </Column>

      <Column width={150}>
        <HeaderCell>Last Updated</HeaderCell>
        <Cell dataKey="updated" />
      </Column>

      <Column width={150}>
        <HeaderCell>Grade</HeaderCell>
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
    </Table>
  )
}
