import React, { useCallback, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { Radio, RadioGroup } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { clearSearchParams, setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const user_id = useAppSelector(state => state.auth.user._id)
  const [valueToggle, setValueToggle] = useState<'all' | 'my'>('all')
  const dispatch = useAppDispatch()

  const updateValue = useCallback((value: string) => {
    console.log(value)
  }, [])

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id, page: 1 }))
  }
  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null, page: 1 }))
  }

  return (
    <RadioGroup name="radioList" inline appearance="picker" defaultValue={valueToggle}>
      <Radio value="my" onClick={handlerMyCards}>
        My
      </Radio>
      <Radio value="all" onClick={handlerAllCards}>
        All
      </Radio>
    </RadioGroup>
  )
}
