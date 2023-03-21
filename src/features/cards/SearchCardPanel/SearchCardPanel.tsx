import React, { useEffect, useState } from 'react'

import { IoEllipsisVerticalCircle } from 'react-icons/io5'
import { Input, Whisper } from 'rsuite'

import { Button } from 'common/components/Button/Button'
import { Box } from 'common/components/Layout/Box'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { useDebounce } from 'common/hooks/useDebounce'
import { CardsPopover } from 'features/cards/SearchCardPanel/CardsPopover'

type SearchCardPanelPropsType = {
  isNotEmptyPack: boolean
  isMyPack: boolean
  setSearchParams: (searchParams: string) => void
  addNewCard: () => void
  deletePack: () => void
}

export const SearchCardPanel = ({
  isNotEmptyPack,
  isMyPack,
  setSearchParams,
  addNewCard,
  deletePack,
}: SearchCardPanelPropsType) => {
  const packName = useAppSelector(state => state.cards.packName)
  const [value, setValue] = useState<string>('')
  const debounceValue = useDebounce(value, 1000)

  useEffect(() => {
    setSearchParams(debounceValue)
  }, [debounceValue])

  const handlerChangeInput = (value: string) => {
    setValue(value)
  }

  return (
    <Box width={'100%'} display={'flex'} flexDirection={'column'}>
      <Box display={'flex'} justifyContent={'space-between'} mb={'2'}>
        <Box display={'flex'} alignItems={'center'} gap={'9px'}>
          <span style={{ fontWeight: '600', fontSize: '22px', lineHeight: '27px', color: 'white' }}>
            {packName}
          </span>
          {isMyPack && (
            <Whisper
              trigger="click"
              placement={'bottom'}
              speaker={<CardsPopover deletePack={deletePack} />}
            >
              <Box display={'flex'} alignItems={'center'}>
                <IoEllipsisVerticalCircle size={22} color={'white'} cursor={'pointer'} />
              </Box>
            </Whisper>
          )}
        </Box>
        {isNotEmptyPack && (
          <Box>
            {isMyPack ? (
              <Button onClick={addNewCard}>Add new card</Button>
            ) : (
              <Button>Learn to pack</Button>
            )}
          </Box>
        )}
      </Box>
      {isNotEmptyPack && (
        <Box width={'100%'}>
          <Box mb={'2'}>
            <p style={{ color: 'white' }}>Search</p>
          </Box>
          <Input value={value} onChange={handlerChangeInput} />
        </Box>
      )}
    </Box>
  )
}
