import React, { memo, useState } from 'react'

import { EditForm } from 'common/components/EditableSpan/EditForm'
import { Field } from 'common/components/EditableSpan/Field'

type EditableSpanPropsType = {
  value: string
  label: string
  onChange: (newValue: string) => void
}

export const EditableSpan = memo(({ value, onChange, label }: EditableSpanPropsType) => {
  const [editMode, setEditMode] = useState(false)

  const onEditMode = () => {
    setEditMode(true)
  }
  const onViewMode = () => {
    setEditMode(false)
  }

  const onSetNewValue = (newValue: string) => {
    onChange(newValue)
    onViewMode()
  }

  return editMode ? (
    <EditForm value={value} setValue={onSetNewValue} label={label} />
  ) : (
    <Field onEditMode={onEditMode}>{value}</Field>
  )
})
