import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { theme } from 'styles/theme'

type SuperButtonPropsType = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const variants = {
  ['primary']: css`
    background-color: ${theme.btn.primary.bg};
    color: ${theme.btn.primary.color};
    box-shadow: ${theme.btn.primary.boxShadow};

    &:hover {
      background: ${theme.btn.primary.bgHover};
    }

    transition: all 0.3s ease;
  `,
  ['secondary']: theme.colors.secondary,
  ['success']: theme.colors.success,
  ['danger']: theme.colors.danger,
  ['warning']: css`
    background-color: ${theme.colors.danger};
  `,
}

const sizes = {
  small: css`
    border-radius: 2px;
    font-size: 12px;
    padding: 4px 10px;
    box-shadow: none;
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

export const Button = styled.button<SuperButtonPropsType>`
  border-radius: 6px;
  ${p => variants[p.variant || 'primary']};
  border: none;
  ${p => sizes[p.size || 'medium']}
  font-weight: 500;
  margin: 0;

  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  color: white;

  cursor: pointer;
  outline: none;
  text-decoration: none;
`

export const LinkText = styled(Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-decoration-line: underline;
  color: #366eff;
  cursor: pointer;
`
