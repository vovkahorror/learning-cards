import styled from 'styled-components'

import { Button } from 'common/components'

export const Icon = styled.span<IconType>`
  margin-right: 5px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: darkred;
  }
`

export const LearnIcon = styled(Icon)`
  pointer-events: ${p => (p.cardsCount ? 'all' : 'none')};
  opacity: ${p => (p.cardsCount ? 'none' : '0.4')};
`

export const SaveButton = styled(Button)`
  width: 130px;
`

export const CancelButton = styled(SaveButton)`
  background: none;
  border: 2px ${props => props.theme.colors.fontMain} solid;
  color: ${props => props.theme.colors.fontMain};

  &:hover {
    color: white;
  }
`

export const DeleteButton = styled(SaveButton)`
  background: ${props => props.theme.colors.danger};

  &:hover {
    background: red;
  }
`

type IconType = {
  cardsCount?: number
}

export const CoverPackImg = styled.img`
  object-fit: cover;
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;
  background-repeat: no-repeat;
  max-height: 50px;
  max-width: 80px;
  min-height: 50px;
  min-width: 80px;
`
