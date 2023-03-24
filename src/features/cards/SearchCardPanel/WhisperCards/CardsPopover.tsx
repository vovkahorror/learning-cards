import React, { ForwardedRef, forwardRef } from 'react'

import { BsFillTrash3Fill, BsPencilFill, BsRocketTakeoffFill } from 'react-icons/bs'
import { List, Popover } from 'rsuite'
import styled from 'styled-components'

type CardsPopoverPropsType = {
  navigateToLearn: () => void
  handlerOpenModal: (title: string) => void
  close: () => void
}

export const CardsPopover = forwardRef(
  (
    { navigateToLearn, handlerOpenModal, close, ...props }: CardsPopoverPropsType,
    ref: ForwardedRef<HTMLDivElement> | null
  ) => {
    return (
      <>
        <Popover ref={ref} arrow {...props}>
          <List onClick={close}>
            <StyledListItem onClick={() => handlerOpenModal('Edit pack')}>
              <BsPencilFill /> <span>Edit</span>
            </StyledListItem>
            <StyledListItem onClick={() => handlerOpenModal('Delete pack')}>
              <BsFillTrash3Fill /> <span>Delete</span>
            </StyledListItem>
            <StyledListItem onClick={() => navigateToLearn()}>
              <BsRocketTakeoffFill /> <span>Learn</span>
            </StyledListItem>
          </List>
        </Popover>
      </>
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
