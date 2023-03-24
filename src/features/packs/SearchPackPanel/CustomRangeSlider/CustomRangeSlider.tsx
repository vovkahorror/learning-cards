import { useEffect, useState } from 'react'

import { RangeSlider } from 'rsuite'

import { appSelectors } from 'app'
import { Box } from 'common/components'
import { useAppSelector, useAppDispatch, useDebounce } from 'common/hooks'
import { packsSelectors } from 'features/packs/index'
import { setSearchParams } from 'features/packs/packsSlice'
import { Count } from 'features/packs/SearchPackPanel/CustomRangeSlider/Count'

export const CustomRangeSlider = () => {
  const minCardsCount = useAppSelector(packsSelectors.minCardsCount)
  const maxCardsCount = useAppSelector(packsSelectors.maxCardsCount)
  const statusLoading = useAppSelector(appSelectors.statusLoading)
  const dispatch = useAppDispatch()

  const [value, setValue] = useState<[number, number]>([0, 0])
  const [valueForDebounce, setValueForDebounce] = useState<[number, number] | undefined>(undefined)
  const debounceValue = useDebounce(valueForDebounce, 700)

  // minCardsCount и maxCardsCount в initial state равны нулю, после получения ответа с сервера их
  // сетаем в setValue для значений по умолчанию (нужны для отображения при первой загрузке)
  useEffect(() => {
    setValue([minCardsCount, maxCardsCount])
  }, [maxCardsCount, minCardsCount])

  useEffect(() => {
    if (!debounceValue) return
    dispatch(setSearchParams({ min: value[0], max: value[1] }))
  }, [debounceValue])

  const handlerChangeValue = (value: [number, number]) => {
    setValue(value)
    setValueForDebounce(value)
  }

  return (
    <Box display={'flex'} alignItems={'center'} width={'250px'}>
      <Box mr={'3'}>
        <Count>{value[0]}</Count>
      </Box>

      <Box width={'100%'}>
        <RangeSlider
          disabled={statusLoading === 'local'}
          min={minCardsCount}
          max={maxCardsCount}
          progress
          value={value}
          onChange={handlerChangeValue}
        />
      </Box>

      <Box ml={'3'}>
        <Count>{value[1]}</Count>
      </Box>
    </Box>
  )
}
