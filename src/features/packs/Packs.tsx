import { useEffect } from 'react'

import { useSearchParams } from 'react-router-dom'

import { CustomPagination } from 'common/components'
import { useAppSelector, useAppDispatch } from 'common/hooks'
import { authSelectors } from 'features/auth'
import { packsSelectors } from 'features/packs'
import { PackList } from 'features/packs/PackList/PackList'
import { fetchPacksTC, setSearchParams } from 'features/packs/packsSlice'
import { SearchPackPanel } from 'features/packs/SearchPackPanel/SearchPackPanel'

export const Packs = () => {
  const packName = useAppSelector(packsSelectors.packName)
  const sortPacks = useAppSelector(packsSelectors.sortPacks)
  const page = useAppSelector(packsSelectors.page)
  const pageCount = useAppSelector(packsSelectors.pageCount)
  const min = useAppSelector(packsSelectors.min)
  const max = useAppSelector(packsSelectors.max)
  const user_id = useAppSelector(packsSelectors.user_id)
  const cardPacksTotalCount = useAppSelector(packsSelectors.cardPacksTotalCount)
  const id = useAppSelector(authSelectors.id)
  const isLoggedIn = useAppSelector(authSelectors.isLoggedIn)
  const dispatch = useAppDispatch()

  let [params, setParams] = useSearchParams()

  useEffect(() => {
    if (isLoggedIn) {
      // для загрузки колоды моя или все (при перезагрузке страницы)
      const user_id = params.get('section') === 'my' ? id : ''

      dispatch(fetchPacksTC({ user_id }))
    }
  }, [min, max, page, pageCount, packName, sortPacks, user_id])

  const setPagination = (page: number, pageCount: number) => {
    dispatch(setSearchParams({ page, pageCount }))
  }

  return (
    <div>
      <SearchPackPanel />
      <PackList />
      <CustomPagination
        page={page}
        pageCount={pageCount}
        totalCount={cardPacksTotalCount}
        setPagination={setPagination}
      />
    </div>
  )
}
