import { MouseEvent } from 'react'

import styled from 'styled-components'

import { ReactComponent as LoaderIcon } from 'assets/img/loader.svg'
import { theme } from 'styles/theme'

export const Loader = () => {
  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  return (
    <LoaderWrapper onClick={onClickHandler}>
      <LoaderIcon fill={theme.colors.primary} />
    </LoaderWrapper>
  )
}

const LoaderWrapper = styled.div`
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
  background-color: #fff;
`
