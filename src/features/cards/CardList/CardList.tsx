import React, { FC } from 'react'

import { Rate, Table } from 'rsuite'

import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardType } from 'features/cards/cardsAPI'
import { updateCardTC } from 'features/cards/cardsSlise'

type CardListPropsType = {
  userId: string
}

const { Column, HeaderCell, Cell } = Table

export const CardList: FC<CardListPropsType> = ({ userId }) => {
  const dispatch = useAppDispatch()

  const cards = useAppSelector<CardType[]>(state => state.cards.cards)

  const gradeHandler = (_id: string) => (grade: number) => {
    dispatch(updateCardTC({ _id, grade }))
  }

  const headerStyles = {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    background: '#efefef',
  }

  return (
    <Box mt="3">
      <Table height={400} data={cards} wordWrap={'break-word'} autoHeight>
        <Column flexGrow={1} align="left">
          <HeaderCell style={headerStyles}>Question</HeaderCell>
          <Cell dataKey="question" />
        </Column>

        <Column flexGrow={1} align="left">
          <HeaderCell style={headerStyles}>Answer</HeaderCell>
          <Cell dataKey="answer" />
        </Column>

        <Column width={150}>
          <HeaderCell style={headerStyles}>Last Updated</HeaderCell>
          <Cell dataKey="updated">
            {rowData => <span>{new Date(rowData.updated).toLocaleDateString('uk-UA')}</span>}
          </Cell>
        </Column>

        <Column width={150}>
          <HeaderCell style={headerStyles}>Grade</HeaderCell>
          <Cell dataKey="grade">
            {rowData => (
              <Rate
                value={rowData.grade}
                max={5}
                size={'xs'}
                style={{ color: '#FFC700' }}
                allowHalf
                onChange={gradeHandler(rowData._id)}
                readOnly={rowData.user_id !== userId}
              />
            )}
          </Cell>
        </Column>
      </Table>
    </Box>
  )
}
