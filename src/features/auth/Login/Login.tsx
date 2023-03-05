import React from 'react'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'
import { Box } from 'common/components/Layout/Box'

export const Login = () => {
  return (
    <>
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mb={'5'}>
        <h1>Sign in</h1>
      </Box>
      <Input type={'text'} label={'Email'} />
      <Input type={'password'} label={'Password'} />
      <Button fullWidth={true}>Sign In</Button>
    </>
  )
}
