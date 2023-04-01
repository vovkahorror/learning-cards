import styled from 'styled-components'

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

export const IconDisable = styled(Icon)`
  pointer-events: ${p => (p.cardsCount ? 'all' : 'none')};
  opacity: ${p => (p.cardsCount ? 'none' : '0.4')};
`

type IconType = {
  cardsCount?: number
}
