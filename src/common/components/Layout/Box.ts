import { css } from 'styled-components'

import { styled } from 'styles/theme'

type MarginPaddingSizeType = 'auto' | '1' | '2' | '3' | '4' | '5'
type MarginType = {
  mt?: MarginPaddingSizeType
  mr?: MarginPaddingSizeType
  mb?: MarginPaddingSizeType
  ml?: MarginPaddingSizeType
  mx?: MarginPaddingSizeType
  my?: MarginPaddingSizeType
}
type PaddingType = {
  pt?: MarginPaddingSizeType
  pr?: MarginPaddingSizeType
  pb?: MarginPaddingSizeType
  pl?: MarginPaddingSizeType
  px?: MarginPaddingSizeType
  py?: MarginPaddingSizeType
}
type DisplayType =
  | 'inline'
  | 'inline-block'
  | 'flex'
  | 'inline-flex'
  | 'grid'
  | 'inline-grid'
  | 'flow-root'
type BoxPropsType = {
  display?: DisplayType
  gap?: string
  width?: string
  alignItems?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'stretch'
  flexDirection?: 'row' | 'column'
  justifyContent?:
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'left'
    | 'right'
    | 'space-between'
    | 'space-around'
} & MarginType &
  PaddingType

// Example
// mt={'1}:  .25rem  = 4px
// mt-2:  .5rem   = 8px
// mt-3:  1rem    = 16px
// mt-4:  1.5rem  = 24px
// mt-5:  3rem    = 48px

const sizes = {
  ['1']: '.25rem',
  ['2']: '.5rem',
  ['3']: '1rem',
  ['4']: '1.5rem',
  ['5']: '3rem',
  ['auto']: 'auto',
}

export const Box = styled.div<BoxPropsType>`
  width: ${p => p.width || 'auto'};
  display: ${props => (props.display ? props.display : 'block')};
  ${props =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}
  ${props =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}
  ${props =>
    props.pt &&
    css`
      padding-top: ${sizes[props.pt]};
    `}
  ${props =>
    props.pr &&
    css`
      padding-right: ${sizes[props.pr]};
    `}
  ${props =>
    props.pb &&
    css`
      padding-bottom: ${sizes[props.pb]};
    `}
  ${props =>
    props.pl &&
    css`
      padding-left: ${sizes[props.pl]};
    `}
  ${props =>
    props.px &&
    css`
      padding-left: ${sizes[props.px]};
      padding-right: ${sizes[props.px]};
    `}
  ${props =>
    props.py &&
    css`
      padding-top: ${sizes[props.py]};
      padding-bottom: ${sizes[props.py]};
    `}

  ${props =>
    props.mt &&
    css`
      margin-top: ${sizes[props.mt]};
    `}
  ${props =>
    props.mr &&
    css`
      margin-right: ${sizes[props.mr]};
    `}
  ${props =>
    props.mb &&
    css`
      margin-bottom: ${sizes[props.mb]};
    `}
  ${props =>
    props.ml &&
    css`
      margin-left: ${sizes[props.ml]};
    `}
  ${props =>
    props.mx &&
    css`
      margin-left: ${sizes[props.mx]};
      margin-right: ${sizes[props.mx]};
    `}
  ${props =>
    props.my &&
    css`
      margin-top: ${sizes[props.my]};
      margin-bottom: ${sizes[props.my]};
    `}
  ${props =>
    props.flexDirection &&
    css`
      flex-direction: ${props.flexDirection};
    `}
  ${props =>
    props.gap &&
    css`
      gap: ${props.gap};
    `}
`
