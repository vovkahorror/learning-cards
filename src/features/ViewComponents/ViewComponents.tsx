import React from 'react'

import { Button } from 'common/components/Button/Button'
import { Input } from 'common/components/Input/Input'

export const ViewComponents = () => {
  return (
    <div>
      <div style={{ margin: '20px', display: 'flex' }}>
        <Input type={'text'} />
      </div>

      <div style={{ margin: '20px' }}>
        <Button>Default Button</Button>
        <Button variant={'secondary'}>Secondary Button</Button>
        <Button variant={'danger'}>Red Button</Button>
        <Button disabled>Disabled Button</Button>
      </div>
    </div>
  )
}
