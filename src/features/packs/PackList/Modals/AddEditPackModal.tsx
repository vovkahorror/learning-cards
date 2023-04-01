import { ChangeEvent, useState } from 'react'

import { Box, Input } from 'common/components'
import { CancelButton, SaveButton } from 'features/packs/PackList/styled'

type ModalPropsType = {
  setShowModal: (value: boolean) => void
  nameOfPack?: string
  isPrivate?: boolean
  addEditPack: (name: string, isPrivate: boolean) => void
}

export const AddEditPackModal = ({
  setShowModal,
  nameOfPack,
  isPrivate,
  addEditPack,
}: ModalPropsType) => {
  const [name, setName] = useState(nameOfPack || '')
  const [checkbox, setCheckbox] = useState(isPrivate || false)

  const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handlerCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckbox(e.target.checked)
  }

  const handlerEditPack = () => {
    addEditPack(name, checkbox)
    setShowModal(false)
  }

  return (
    <>
      <Box mb={'4'}>
        <Input value={name} onChange={e => handlerChangeInput(e)} type="text" label="Name pack" />
      </Box>

      <input type="file" />

      <Box mt="4">
        <Input checked={checkbox} onChange={handlerCheckbox} type="checkbox" label="Private pack" />
      </Box>
      <Box mt="5" display="flex" justifyContent="space-between">
        <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
        <SaveButton onClick={handlerEditPack}>Save</SaveButton>
      </Box>
    </>
  )
}
