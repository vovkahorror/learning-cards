import { FC } from 'react'

import { ReactComponent as FilterIcon } from 'assets/img/filter.svg'
import { styled } from 'styles/theme'

type ClearFilterType = {
  disabled: boolean
  onClick: () => void
}
const ClearFiltgerContainer = styled.button`
  padding: 6px 8px;
  width: 40px;
  height: 36px;
  border-radius: 5px;
  background-color: var(--rs-bg-card);
  color: var(--rs-primary-500);
  cursor: pointer;
`

export const ClearFilter: FC<ClearFilterType> = ({ onClick, disabled }) => {
  return (
    <ClearFiltgerContainer disabled={disabled} onClick={onClick}>
      <FilterIcon />
    </ClearFiltgerContainer>
  )
}

// export const ClearFilter = styled(FilterIcon)`
//   padding: 6px 8px;
//   width: 40px;
//   height: 36px;
//   border-radius: 2px;
//   background-color: var(--rs-bg-card);
//   fill: var(--rs-text-primary);
//   cursor: pointer;
// `
