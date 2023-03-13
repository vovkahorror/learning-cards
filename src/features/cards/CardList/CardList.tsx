import React from 'react'

import { Table } from 'rsuite'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardType } from 'features/cards/cardsAPI'

const { Column, HeaderCell, Cell } = Table

export const CardList = () => {
  const cards = useAppSelector<CardType[]>(state => state.cards.cards)

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
        <Cell dataKey="grade" />
      </Column>
    </Table>
  )
}
