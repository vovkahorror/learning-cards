import React, { ChangeEvent, useState } from 'react'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'

type EditFormPropsType = {
  label: string
  value: string
  setValue: (value: string) => void
}

export const EditForm = ({ label, value, setValue }: EditFormPropsType) => {
  const [newValue, setNewValue] = useState(value)
  const [error, setError] = useState<string | null>(null)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    setNewValue(value)
    error && setError(null)
  }

  const setNewValueHandler = () => {
    if (newValue.trim()) {
      setValue(newValue)
    } else {
      setError('Enter correct value')
    }
  }

  return (
    <>
      <Box display={'flex'}>
        <Input type={'text'} label={label} autoFocus value={newValue} onChange={onChangeHandler} />
        <Button onClick={setNewValueHandler} size={'small'}>
          SAVE
        </Button>
      </Box>
      {error && <span>{error}</span>}
    </>
  )
}
