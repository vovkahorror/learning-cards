import React, { useEffect, useState } from 'react'

import { Input } from 'rsuite'

import { Box } from 'common/components/Layout/Box'
import { useDebounce } from 'common/hooks/useDebounce'

type SearchCardPanelPropsType = {
  setSearchParams: (searchParams: string) => void
}

export const SearchCardPanel = ({ setSearchParams }: SearchCardPanelPropsType) => {
  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 1000)

  useEffect(() => {
    setSearchParams(debounceValue)
  }, [debounceValue])

  const addNewCard = () => {
    // dispatch(addPackTC({ name: 'NEW CARD', private: false }))
  }

  const handlerChangeInput = (value: string) => {
    setValue(value)
  }

  return (
    <Box width={'100%'} display={'flex'}>
      <Box width={'100%'}>
        <Box mb={'2'}>
          <p style={{ color: 'white' }}>Search</p>
        </Box>
        <Input value={value} onChange={handlerChangeInput} />
      </Box>
    </Box>
  )
}
