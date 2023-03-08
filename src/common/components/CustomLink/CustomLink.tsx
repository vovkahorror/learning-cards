import React from 'react'

import { Link } from 'react-router-dom'
import { css } from 'styled-components'

import { styled } from 'styles/theme'

type CustomLinkPropsType = {
  to: string
  variant?: 'text' | 'contained'
  width?: string
}

const variantCustomLink = {
  ['text']: css`
    display: block;
    text-decoration: underline;
    color: #366eff;
    line-height: 20px;
    font-weight: 600;
  `,
  ['contained']: css`
    display: inline-block;
    padding: 8px 16px;

    background: #366eff;
    box-shadow: 0 4px 18px rgba(54, 110, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.3);
    border-radius: 30px;

    line-height: 24px;
    font-weight: 500;
    color: #fff;
  `,
}

export const CustomLink = styled(Link)<CustomLinkPropsType>`
  text-align: center;
  ${p => variantCustomLink[p.variant || 'text']};
  font-size: 16px;
  width: ${p => p.width || 'auto'};
`
