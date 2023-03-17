import React from 'react'

import styled from 'styled-components'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'

type EmptyCardListPropsType = {
  isMyPack: boolean

  addNewCard: () => void
}

export const EmptyCardList = ({
  isMyPack,

  addNewCard,
}: EmptyCardListPropsType) => {
  return (
    <EmptyCardListWrapper>
      <p>This pack is empty. {isMyPack && <span>Click add new card to fill this pack</span>}</p>
      {isMyPack && <Button onClick={addNewCard}>Add new card</Button>}
    </EmptyCardListWrapper>
  )
}

export const EmptyCardListWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  height: 50vh;
`
