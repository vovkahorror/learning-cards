import { useEffect, useState } from 'react'

import { RangeSlider } from 'rsuite'

import { Box } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { packsSelectors } from 'features/packs/index'
import { setSearchParams } from 'features/packs/packsSlice'
import { Count } from 'features/packs/SearchPackPanel/CustomRangeSlider/Count'

export const CustomRangeSlider = () => {
  const minCardsCount = useAppSelector(packsSelectors.minCardsCount)
  const maxCardsCount = useAppSelector(packsSelectors.maxCardsCount)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState<[number, number]>([0, 0])

  // minCardsCount и maxCardsCount в initial state равны нулю, после получения ответа с сервера их
  // сетаем в setValue для значений по умолчанию (нужны для отображения при первой загрузке)
  useEffect(() => {
    setValue([minCardsCount, maxCardsCount])
  }, [maxCardsCount, minCardsCount])

  const handlerChangeValue = (value: [number, number]) => {
    setValue(value)
  }

  const handlerChangeCommitted = (value: [number, number]) => {
    dispatch(setSearchParams({ min: value[0], max: value[1] }))
  }

  return (
    <Box display={'flex'} alignItems={'center'} width={'250px'}>
      <Box mr={'3'}>
        <Count>{value[0]}</Count>
      </Box>

      <Box width={'100%'}>
        <RangeSlider
          min={minCardsCount}
          max={maxCardsCount}
          progress
          value={value}
          onChangeCommitted={handlerChangeCommitted}
          onChange={handlerChangeValue}
        />
      </Box>

      <Box ml={'3'}>
        <Count>{value[1]}</Count>
      </Box>
    </Box>
  )
}
