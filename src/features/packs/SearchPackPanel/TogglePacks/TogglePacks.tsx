import { useSearchParams } from 'react-router-dom'
import { Radio, RadioGroup } from 'rsuite'

import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const my_id = useAppSelector(authSelectors.id)
  const dispatch = useAppDispatch()

  let [params, setParams] = useSearchParams()
  const value = params.get('section') || 'all'

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id: my_id, page: 1 }))
    setParams({ section: 'my' })
  }

  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null, page: 1 }))
    setParams({ section: 'all' })
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
