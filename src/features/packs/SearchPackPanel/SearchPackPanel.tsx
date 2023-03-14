import React, { useEffect, useState } from 'react'

import { Input } from 'rsuite'

import { CustomRangeSlider } from 'common/components/CustomRangeSlider/CustomRangeSlider'
import { Box } from 'common/components/Layout/Box'
import { TogglePacks } from 'common/components/TogglePacks/TogglePacks'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useDebounce } from 'common/hooks/useDebounce'
import { addPackTC, clearSearchParams, setSearchParams } from 'features/packs/packsSlice'

export const SearchPackPanel = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 1000)

  useEffect(() => {
    dispatch(setSearchParams({ packName: debounceValue }))
  }, [debounceValue])

  const handlerClearFilter = () => {
    dispatch(clearSearchParams())
    setValue('')
  }

  const addNewPack = () => {
    dispatch(addPackTC({ name: 'Gdańsk', private: false }))
  }

  const handlerChangeInput = (value: string) => {
    setValue(value)
  }

  return (
    <Box
      width={'100%'}
      display={'flex'}
      justifyContent={'space-between'}
      gap={'20px'}
      alignItems={'end'}
    >
      <Box width={'413px'}>
        <Box mb={'2'}>
          <p>Search</p>
        </Box>
        <Input value={value} onChange={handlerChangeInput} />
      </Box>

      <Box>
        <Box mb={'2'}>
          <p>Show packs cards</p>
        </Box>
        <TogglePacks />
      </Box>

      <Box>
        <Box mb={'2'}>
          <p>Number of cards</p>
        </Box>
        <CustomRangeSlider />
      </Box>

      <p onClick={handlerClearFilter}>filter</p>
      <p onClick={addNewPack}>Add pack</p>
    </Box>
  )
}
