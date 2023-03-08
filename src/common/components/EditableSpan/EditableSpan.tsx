import React, { memo, useState } from 'react'

import { useForm } from 'react-hook-form'
import { AiOutlineEdit } from 'react-icons/ai'

import { Button } from '../Button/Button'
import { Input } from '../Input/Input'

import { Form } from './editableSpan.styled'

import { Box } from 'common/components/Layout/Box'

type EditableSpanPropsType = {
  value: string
  onChange: (newValue: string) => void
}

type EditFormType = {
  value?: string
  label: string
}
type FieldPropsType = {
  onDoubleClick: () => void
  children: React.ReactNode
}
export const EditableSpan = memo((props: EditFormType) => {
  const [edit, setEdit] = useState(false)
  const [value, setValue] = useState(props.value)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const activateEditMode = () => {
    setEdit(true)
    setValue(props.value)
  }
  const activateViewMode = () => {
    setEdit(false)
    setValue(props.value)
  }

  const EditForm = () => {
    return (
      <Form>
        <Input type={'text'} label={props.label} />
        <Button onClick={activateViewMode} size={'small'}>
          SAVE
        </Button>
      </Form>
    )
  }

  const Field = (props: FieldPropsType) => {
    return (
      <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
        {props.children}
        <AiOutlineEdit size={'1.25rem'} />
      </Box>
    )
  }

  return edit ? <EditForm /> : <Field onDoubleClick={activateEditMode}>фывф{props.value}</Field>
})
