import React, { ChangeEvent, useState } from 'react'

import styled from 'styled-components'

import { Box, Button, Input } from 'common/components'

export const CopyButton = styled(Button)`
  width: 130px;
`

export const CancelButton = styled(CopyButton)`
  background: none;
  border: 2px ${props => props.theme.colors.fontMain} solid;
  color: ${props => props.theme.colors.fontMain};

  &:hover {
    color: white;
  }
`

export const DeleteButton = styled(CopyButton)`
  background: ${props => props.theme.colors.danger};

  &:hover {
    background: red;
  }
`

export const DataModal = ({
  setShowModal,
  title,
  addEditPack,
  deletePack,
  nameOfPack,
  isPrivatePack,
}: DataModalType) => {
  const [name, setName] = useState(nameOfPack || '')
  const [checkbox, setCheckbox] = useState(isPrivatePack || false)

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setName(e.currentTarget.value)
  }

  function checkboxHandler(e: ChangeEvent<HTMLInputElement>) {
    setCheckbox(e.target.checked)
  }

  function action() {
    if (title === 'Delete pack') {
      deletePack?.()
    } else {
      addEditPack?.(name, checkbox)
    }
    setShowModal(false)
  }

  return (
    <>
      {title === 'Delete pack' ? (
        <div>
          Do you really want to remove <b>{nameOfPack}</b>?<br />
          All cards will be deleted.
        </div>
      ) : (
        <>
          <Box>
            <Input value={name} onChange={e => inputHandler(e)} type="text" label="Name pack" />
          </Box>
          <Box mt="4">
            <Input
              checked={checkbox}
              onChange={e => checkboxHandler(e)}
              type="checkbox"
              label="Private pack"
            />
          </Box>
        </>
      )}
      <Box mt="5" display="flex" justifyContent="space-between">
        <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
        {title === 'Delete pack' ? (
          <DeleteButton onClick={action}>Delete</DeleteButton>
        ) : (
          <CopyButton onClick={action}>Save</CopyButton>
        )}
      </Box>
    </>
  )
}

type DataModalType = {
  setShowModal: (value: boolean) => void
  addEditPack?: (name: string, isPrivate: boolean) => void
  deletePack?: () => void
  nameOfPack?: string
  title?: string
  isPrivatePack?: boolean
}
