import React from 'react'

import { Radio, RadioGroup } from 'rsuite'

export const TogglePacks = () => {
  return (
    <RadioGroup name="radioList" inline appearance="picker" defaultValue="all">
      <Radio value="my">My</Radio>
      <Radio value="all">All</Radio>
    </RadioGroup>
  )
}
