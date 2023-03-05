import { styled } from 'styles/theme'

type RowPropsType = {
  alignItems?: string
  justifyContent?: string
}

export const Row = styled.div<RowPropsType>`
  display: flex;
  align-items: ${props => (props.alignItems ? props.alignItems : 'start')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : 'start')};
`
