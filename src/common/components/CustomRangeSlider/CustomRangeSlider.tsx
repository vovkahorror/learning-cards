import React, { useState } from 'react'

import { RangeSlider } from 'rsuite'

import { Box } from '../Layout/Box'

import { Count } from 'common/components/CustomRangeSlider/Count'

type CustomRangeSliderType = {
  currentValue: [number, number]
  maxValue: number
}

export const CustomRangeSlider = ({ currentValue, maxValue }: CustomRangeSliderType) => {
  const [value, setValue] = useState<[number, number]>(currentValue)

  return (
    <Box display={'flex'} alignItems={'center'} width={'250px'}>
      <Box mr={'3'}>
        <Count>{value[0]}</Count>
      </Box>

      <Box width={'100%'}>
        <RangeSlider
          min={0}
          max={maxValue}
          defaultValue={value}
          progress
          value={value}
          onChange={(value: [number, number]) => {
            setValue(value)
          }}
        />
      </Box>

      <Box ml={'3'}>
        <Count>{value[1]}</Count>
      </Box>
    </Box>
  )
}
