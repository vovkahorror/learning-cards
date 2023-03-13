import React from 'react'

import { Radio, RadioGroup } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const user_id = useAppSelector(state => state.auth.user._id)
  const dispatch = useAppDispatch()

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id }))
  }
  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null }))
  }

  return (
    <RadioGroup name="radioList" inline appearance="picker" defaultValue="all">
      <Radio value="my" onClick={handlerMyCards}>
        My
      </Radio>
      <Radio value="all" onClick={handlerAllCards}>
        All
      </Radio>
    </RadioGroup>
  )
}
