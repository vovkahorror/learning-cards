import React from 'react'

import { ReactComponent as ArrowLeft } from 'assets/img/arrowLeft.svg'
import { styled } from 'styles/theme'

type BackToPacksPropsType = {
  onClick: () => void
}

export const BackToPacks = ({ onClick }: BackToPacksPropsType) => {
  return (
    <BackToPacksWrapper onClick={onClick}>
      <ArrowLeft fill={'#fff'} />
      <BackToPacksText>Back to Packs List</BackToPacksText>
    </BackToPacksWrapper>
  )
}

const BackToPacksWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  column-gap: 10px;
  cursor: pointer;
  margin-bottom: 20px;
`

const BackToPacksText = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: white;
`
