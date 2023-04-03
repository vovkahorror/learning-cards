import React, { ChangeEvent, useRef, useState } from 'react'

import { SelectPicker, Tooltip, Whisper } from 'rsuite'

import { Box, Button, Input } from 'common/components'
import { convertFileToBase64 } from 'common/utils/convert-file-to-base64'
import { CancelButton, SaveButton, DeleteButton } from 'features/packs/PackList/styled'

export const CardModal = ({
  title,
  question,
  questionImg,
  answer,
  setShowModal,
  addEditCard,
  deleteCard,
}: CardModalPropsType) => {
  const selectData = [
    { label: 'Text', value: 'Text' },
    { label: 'Image', value: 'Image' },
  ]

  const inputRef = useRef<HTMLInputElement>(null)
  const [questionValue, setQuestionValue] = useState<string>(question || '')
  const [questionImage, setQuestionImage] = useState<string>(questionImg || '')
  const [answerValue, setAnswerValue] = useState<string>(answer || '')

  const isCorrectQuestionImage = questionImage && questionImage !== 'data:none'

  const [selectValue, setSelectValue] = useState<string | null>(
    isCorrectQuestionImage ? selectData[1].value : selectData[0].value
  )

  const action = () => {
    if (title === 'Delete card') {
      deleteCard?.()
    } else {
      addEditCard?.(selectValue, questionValue, questionImage, answerValue)
    }
    setShowModal(false)
  }

  const handlerSelectedFile = () => {
    inputRef && inputRef.current?.click()
  }

  const handlerUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      convertFileToBase64(file, (file64: string) => {
        setQuestionImage(file64)
      })
    }
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
            {selectValue === 'Text' ? (
              <Input
                type={'text'}
                value={questionValue}
                label={'Question'}
                onChange={e => setQuestionValue(e.currentTarget.value)}
              />
            ) : (
              <Box display={'flex'} flexDirection={'column'} gap={'10px'} width={'100%'}>
                {isCorrectQuestionImage && <img src={questionImage} alt="question image" />}
                <Whisper
                  trigger="hover"
                  placement="bottomEnd"
                  speaker={<Tooltip arrow={false}>1 Mb max</Tooltip>}
                >
                  <Button fullWidth onClick={handlerSelectedFile}>
                    Upload {isCorrectQuestionImage ? 'another' : 'the'} question image
                  </Button>
                </Whisper>
                <input
                  style={{ display: 'none' }}
                  ref={inputRef}
                  type="file"
                  accept={'.png, .jpg, .jpeg, .gif'}
                  onChange={handlerUpload}
                />
              </Box>
            )}
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
          <SaveButton
            disabled={!((questionValue || isCorrectQuestionImage) && answerValue)}
            onClick={action}
          >
            Save
          </SaveButton>
        )}
      </Box>
    </Box>
  )
}

type CardModalPropsType = {
  title?: TitleType
  question?: string
  questionImg?: string
  answer?: string
  setShowModal: (value: boolean) => void
  addEditCard?: (
    format: string | null,
    question: string,
    questionImg: string,
    answer: string
  ) => void
  deleteCard?: () => void
}

export type TitleType = 'Add new card' | 'Edit card' | 'Delete card'
