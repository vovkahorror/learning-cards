import React, { ForwardedRef, forwardRef } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { List, Popover } from 'rsuite'
import styled from 'styled-components'

type CardsPopoverPropsType = {
  deletePack: () => void
}

export const CardsPopover = forwardRef(
  ({ deletePack, ...props }: CardsPopoverPropsType, ref: ForwardedRef<HTMLDivElement> | null) => {
    return (
      <Popover ref={ref} arrow {...props}>
        <List>
          <StyledListItem>
            <BsPencilFill /> <span>Edit</span>
          </StyledListItem>
          <StyledListItem onClick={deletePack}>
            <BsFillTrash3Fill /> <span>Delete</span>
          </StyledListItem>
          <StyledListItem>
            <BsRocketTakeoffFill /> <span>Learn</span>
          </StyledListItem>
        </List>
      </Popover>
    )
  }
)

const StyledListItem = styled(List.Item)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  &:hover {
    color: darkred;
`
