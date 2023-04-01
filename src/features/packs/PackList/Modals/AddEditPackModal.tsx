import { ChangeEvent, useRef, useState } from 'react'

import { Box, Input, Button } from 'common/components'
import { convertFileToBase64 } from 'common/utils/convert-file-to-base64'
import { CancelButton, SaveButton } from 'features/packs/PackList/styled'

type ModalPropsType = {
  setShowModal: (value: boolean) => void
  nameOfPack?: string
  isPrivate?: boolean
  addEditPack: (name: string, isPrivate: boolean, deckCover?: string | null) => void
}

export const AddEditPackModal = ({
  setShowModal,
  nameOfPack,
  isPrivate,
  addEditPack,
}: ModalPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [name, setName] = useState(nameOfPack || '')
  const [checkbox, setCheckbox] = useState(isPrivate || false)
  const [cover, setCover] = useState<string | null>(null)

  const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }
  const handlerCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckbox(e.target.checked)
  }
  const handlerEditPack = () => {
    addEditPack(name, checkbox, cover)
    setShowModal(false)
  }

  const handlerSelectedFile = () => {
    inputRef && inputRef.current?.click()
  }
  const handlerUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      convertFileToBase64(file, (file64: string) => {
        setCover(file64)
      })
    }
  }

  return (
    <>
      <Box mb={'4'}>
        <Input value={name} onChange={e => handlerChangeInput(e)} type="text" label="Name pack" />
      </Box>

      <>
        <Button fullWidth onClick={handlerSelectedFile}>
          upload cover packs
        </Button>
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          type="file"
          accept={'.png, .jpg, .jpeg, .gif'}
          onChange={handlerUpload}
        />
      </>

      <Box mt="4">
        <Input checked={checkbox} onChange={handlerCheckbox} type="checkbox" label="Private pack" />
      </Box>
      <Box mt="5" display="flex" justifyContent="space-between">
        <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
        <SaveButton disabled={!name.length} onClick={handlerEditPack}>
          Save
        </SaveButton>
      </Box>
    </>
  )
}
