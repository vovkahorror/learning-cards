import React, { useState } from 'react'

import { Input } from 'common/components'
import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { ModalWrapper, Overlay, Rectangle } from 'features/Modal/modal.styled'
import { setModal } from 'features/Modal/modalSlice'
import { addPackTC } from 'features/packs/packsSlice'

export const Modal = () => {
  const isModal = useAppSelector(state => state.modal.isModal)
  const title = useAppSelector(state => state.modal.title)
  const [namePack, setNamePack] = useState<string>('')
  const [privatePack, setPrivatePack] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  const modalToggle = () => {
    dispatch(setModal(false))
  }

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNamePack(e.currentTarget.value)
  }

  const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrivatePack(e.currentTarget.checked)
  }

  const addNewPack = () => {
    dispatch(addPackTC({ name: namePack, private: privatePack }))
    modalToggle()
    setNamePack('')
    setPrivatePack(false)
  }

  return (
    <ModalWrapper isModal={isModal}>
      <Overlay />
      <Rectangle>
        <Box mb="5">
          <h1>{title}</h1>
          <hr />
        </Box>
        <Box mb="5">
          <Input onChange={e => onChangeInput(e)} value={namePack} type="text" label="Name Pack" />
        </Box>
        <Box mb="5">
          <Input
            onChange={e => onChangeCheckbox(e)}
            checked={privatePack}
            type="checkbox"
            label={'Private Pack'}
          />
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Button onClick={modalToggle} style={{ width: '130px' }} fullWidth={false}>
            Cancel
          </Button>
          <Button onClick={addNewPack} style={{ width: '130px' }} fullWidth={false}>
            Save
          </Button>
        </Box>
      </Rectangle>
    </ModalWrapper>
  )
}
