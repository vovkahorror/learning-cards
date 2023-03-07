import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type CustomLinkPropsType = {
  variant?: 'text' | 'contained'
  fullWidth?: boolean
}

const variantCustomLink = {
  ['text']: css`
    display: block;
    text-align: center;
    text-decoration: underline;
    color: #366eff;
    line-height: 20px;
    font-weight: 600;
  `,
  ['contained']: css`
    line-height: 24px;
    font-weight: 500;
    color: #fff;
    background-color: #366eff;
    font-size: 14px;
    padding: 8px 16px;
    border-radius: 30px;
  `,
}

export const CustomLink = styled(Link)<CustomLinkPropsType>`
  ${p => variantCustomLink[p.variant || 'text']};
  font-size: 16px;
  width: ${p => (p.fullWidth ? '100%' : 'auto')};
`
