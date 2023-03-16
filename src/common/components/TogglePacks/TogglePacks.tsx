import React, { useCallback, useEffect, useState } from 'react'

import { useSearchParams } from 'react-router-dom'
import { Radio, RadioGroup } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const user_id = useAppSelector(state => state.auth.user._id)
  const [valueToggle, setValueToggle] = useState<'all' | 'my'>('all')
  const [params, setParams] = useSearchParams()
  const dispatch = useAppDispatch()

  const updateValue = useCallback((value: string) => {
    console.log(value)
  }, [])

  console.log(params.get('demon'))

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id }))
    setParams({ demon: 'my' })
  }
  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null }))
    setParams({ demon: 'all' })
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
