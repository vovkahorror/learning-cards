import styled, { css } from 'styled-components'

import { theme } from 'styles/theme'

type SuperButtonPropsType = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
}

const variants = {
  ['primary']: theme.colors.primary,
  ['secondary']: theme.colors.secondary,
  ['success']: theme.colors.success,
  ['danger']: theme.colors.danger,
  ['warning']: theme.colors.warning,
}

const sizes = {
  small: css`
    font-size: 13px;
    padding: 4px 10px;
  `,
  medium: css`
    font-size: 14px;
    padding: 8px 16px;
  `,
  large: css`
    font-size: 15px;
    padding: 10px 22px;
  `,
}

export const SuperButton = styled.button<SuperButtonPropsType>`
  background-color: ${p => variants[p.variant || 'primary']};

  //sizes
  ${p => sizes[p.size || 'medium']}
  font-weight: 500;
  margin: 0;

  color: white;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  outline: none;
`
