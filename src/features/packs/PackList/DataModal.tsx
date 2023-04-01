import React, { ChangeEvent, useState } from 'react'

import { Box, Input } from 'common/components'
import { CancelButton, SaveButton, DeleteButton } from 'features/packs/PackList/styled'

export const DataModal = ({
  setShowModal,
  title,
  addEditPack,
  deletePack,
  nameOfPack,
  isPrivatePack,
}: PropsType) => {
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
          <SaveButton onClick={action}>Save</SaveButton>
        )}
      </Box>
    </>
  )
}

type PropsType = {
  setShowModal: (value: boolean) => void
  addEditPack?: (name: string, isPrivate: boolean) => void
  deletePack?: () => void
  nameOfPack?: string
  title?: string
  isPrivatePack?: boolean
}
