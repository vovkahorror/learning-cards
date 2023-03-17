import React from 'react'

import { BsFillTrash3Fill, BsPencilFill } from 'react-icons/bs'
import { Rate, Table } from 'rsuite'

import { Box } from 'common/components/Layout/Box'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { EmptyCardListWrapper } from 'features/cards/CardList/EmptyCardList'
import { CardType } from 'features/cards/cardsAPI'
import { deleteCardTC, updateCardTC } from 'features/cards/cardsSlice'
import { Icon } from 'features/packs/PackList/PacksAction'

type CardListPropsType = {
  cards: CardType[]
  isMyPack: boolean
}

const { Column, HeaderCell, Cell } = Table

export const CardList = ({ cards, isMyPack }: CardListPropsType) => {
  const dispatch = useAppDispatch()

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

  const headerStyles = {
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '17px',
    color: '#000000',
    background: '#efefef',
  }

  return (
    <Box mt="3">
      <Table height={400} data={cards} wordWrap={'break-word'} renderEmpty={renderEmpty} autoHeight>
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
                readOnly={!isMyPack}
              />
            )}
          </Cell>
        </Column>

        {isMyPack && (
          <Column width={80}>
            <HeaderCell style={headerStyles}>{}</HeaderCell>
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
