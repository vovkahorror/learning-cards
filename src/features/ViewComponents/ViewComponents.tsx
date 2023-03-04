import React from 'react'

import { SuperButton } from 'common/components/SuperButton/SuperButton'
import { SuperInputText } from 'common/components/SuperInputText/SuperInputText'

export const ViewComponents = () => {
  return (
    <div>
      <div style={{ margin: '20px', display: 'flex' }}>
        <SuperInputText />
      </div>

      <div style={{ margin: '20px' }}>
        <SuperButton>Default Button</SuperButton>
        <SuperButton variant={'secondary'}>Secondary Button</SuperButton>
        <SuperButton variant={'danger'}>Red Button</SuperButton>
        <SuperButton disabled>Disabled Button</SuperButton>
      </div>
    </div>
  )
}
