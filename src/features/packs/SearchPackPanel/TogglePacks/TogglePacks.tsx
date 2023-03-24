import { useSearchParams } from 'react-router-dom'
import { Radio, RadioGroup } from 'rsuite'

import { appSelectors } from 'app'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { setSearchParams } from 'features/packs/packsSlice'

export const TogglePacks = () => {
  const user_id = useAppSelector(authSelectors.id)
  const statusLoading = useAppSelector(appSelectors.statusLoading)
  const dispatch = useAppDispatch()

  let [params, setParams] = useSearchParams()
  const value = params.get('section') || 'all'

  const handlerMyCards = () => {
    dispatch(setSearchParams({ user_id, page: 1, min: 0, max: 100 }))
    setParams({ section: 'my' })
  }
  const handlerAllCards = () => {
    dispatch(setSearchParams({ user_id: null, page: 1, min: 0, max: 100 }))
    setParams({ section: 'all' })
  }

  return (
    <RadioGroup
      disabled={statusLoading === 'local'}
      name="radioList"
      inline
      appearance="picker"
      value={value}
    >
      <Radio value="my" onClick={handlerMyCards}>
        My
      </Radio>
      <Radio value="all" onClick={handlerAllCards}>
        All
      </Radio>
    </RadioGroup>
  )
}
