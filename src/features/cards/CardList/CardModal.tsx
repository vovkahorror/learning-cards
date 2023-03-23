import React, { useState } from 'react'

import { SelectPicker } from 'rsuite'

import { Box, Input } from 'common/components'
import { CancelButton, CopyButton, DeleteButton } from 'features/packs/PackList/DataModal'

export const CardModal = ({
  title,
  question,
  answer,
  setShowModal,
  addEditCard,
  deleteCard,
}: CardModalPropsType) => {
  const selectData = [
    { label: 'Text', value: 'Text' },
    { label: 'Image', value: 'Image' },
  ]

  const [selectValue, setSelectValue] = useState<string | null>(selectData[0].value)
  const [questionValue, setQuestionValue] = useState<string>(question || '')
  const [answerValue, setAnswerValue] = useState<string>(answer || '')

  const action = () => {
    if (title === 'Delete card') {
      deleteCard?.()
    } else {
      addEditCard?.(selectValue, questionValue, answerValue)
    }
    setShowModal(false)
  }

  return (
    <Box display={'flex'} flexDirection={'column'} gap={'30px'}>
      {title === 'Delete card' ? (
        <Box>
          Do you really want to remove <b>{question}</b>?<br />
          The card will be deleted.
        </Box>
      ) : (
        <>
          <Box display={'flex'} flexDirection={'column'} gap={'8px'}>
            <span>Choose a question format</span>
            <SelectPicker
              data={selectData}
              value={selectValue}
              onChange={setSelectValue}
              searchable={false}
              block
            />
          </Box>

          <Box>
            <Input
              type={'text'}
              value={questionValue}
              label={'Question'}
              onChange={e => setQuestionValue(e.currentTarget.value)}
            />
          </Box>

          <Box>
            <Input
              type={'text'}
              value={answerValue}
              label={'Answer'}
              onChange={e => setAnswerValue(e.currentTarget.value)}
            />
          </Box>
        </>
      )}

      <Box mt="5" display="flex" justifyContent="space-between">
        <CancelButton onClick={() => setShowModal(false)}>Cancel</CancelButton>
        {title === 'Delete card' ? (
          <DeleteButton onClick={action}>Delete</DeleteButton>
        ) : (
          <CopyButton onClick={action}>Save</CopyButton>
        )}
      </Box>
    </Box>
  )
}

type CardModalPropsType = {
  title?: TitleType
  question?: string
  answer?: string
  setShowModal: (value: boolean) => void
  addEditCard?: (format: string | null, question: string, answer: string) => void
  deleteCard?: () => void
}

export type TitleType = 'Add new card' | 'Edit card' | 'Delete card'
