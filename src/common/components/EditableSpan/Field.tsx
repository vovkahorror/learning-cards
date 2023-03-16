import React from 'react'

import { AiOutlineEdit } from 'react-icons/ai'

import { Box } from 'common/components/Layout/Box'

type FieldPropsType = {
  onEditMode: () => void
  children: React.ReactNode
}

export const Field = ({ onEditMode, children }: FieldPropsType) => {
  return (
    <Box display={'flex'} justifyContent={'center'} gap={'10px'}>
      {children}
      <AiOutlineEdit style={{ cursor: 'pointer' }} onClick={onEditMode} size={'1.25rem'} />
    </Box>
  )
}
