import React from 'react'

import { Box } from 'common/components/Layout/Box'

export const Profile = () => {
  return (
    <Box>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        mb={'5'}
        flexDirection={'column'}
      >
        <h1>Personal Information</h1>
        <Box my={'4'}></Box>
      </Box>
    </Box>
  )
}
