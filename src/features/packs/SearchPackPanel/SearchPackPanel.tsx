import React from 'react'

import { Input } from 'rsuite'

import { CustomRangeSlider } from 'common/components/CustomRangeSlider/CustomRangeSlider'
import { Box } from 'common/components/Layout/Box'
import { TogglePacks } from 'common/components/TogglePacks/TogglePacks'

export const SearchPackPanel = () => {
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
        <Input />
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
        <CustomRangeSlider currentValue={[2, 5]} maxValue={10} />
      </Box>

      <p>filter</p>
    </Box>
  )
}
