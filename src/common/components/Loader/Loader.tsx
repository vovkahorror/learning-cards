import { MouseEvent, useEffect } from 'react'

import styled from 'styled-components'

import { ReactComponent as LoaderIcon } from 'assets/img/loader.svg'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { theme } from 'styles/theme'

export const Loader = () => {
  const statusLoading = useAppSelector(state => state.app.statusLoading)

  useEffect(() => {
    statusLoading && (document.body.style.overflow = 'hidden')
    !statusLoading && (document.body.style.overflow = 'unset')
  }, [statusLoading])

  const onClickHandler = (e: MouseEvent<HTMLDivElement>) => e.stopPropagation()

  if (!statusLoading) {
    return null
  }

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
  color: white;
  background-color: rgba(0, 0, 0, 0.23);
`
