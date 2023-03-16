import React from 'react'

import { useSearchParams } from 'react-router-dom'
import { Radio, RadioGroup } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const user_id = useAppSelector(state => state.auth.user._id)
  const dispatch = useAppDispatch()
  let [params, setParams] = useSearchParams()
  const value = params.get('demon') || 'all'

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id, page: 1 }))
    setParams({ demon: 'my' })
  }
  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null, page: 1 }))
    setParams({ demon: 'all' })
  }

  return (
    <RadioGroup name="radioList" inline appearance="picker" defaultValue={value}>
      <Radio value="my" onClick={handlerMyCards}>
        My
      </Radio>
      <Radio value="all" onClick={handlerAllCards}>
        All
      </Radio>
    </RadioGroup>
  )
}
