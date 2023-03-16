import { MouseEvent } from 'react'

import styled, { css } from 'styled-components'

import { ReactComponent as LoaderIcon } from 'assets/img/loader.svg'
import { theme } from 'styles/theme'

type LoaderPropsType = {
  loading: 'isInitialized' | 'main'
}

export const Loader = ({ loading }: LoaderPropsType) => {
  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  return (
    <LoaderWrapper onClick={onClickHandler} loading={loading}>
      <LoaderIcon fill={theme.colors.primary} />
    </LoaderWrapper>
  )
}

const bg = {
  ['main']: css`
    backdrop-filter: blur(20px);
    box-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px, rgba(0, 0, 0, 0.1) -1px -1px 2px;
  `,
  ['isInitialized']: css`
    background-color: #fff;
  `,
}

const LoaderWrapper = styled.div<{ loading: 'isInitialized' | 'main' }>`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  font-weight: 600;
  font-size: 70px;
  ${p => bg[p.loading]}
`
