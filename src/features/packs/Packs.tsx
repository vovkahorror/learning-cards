import React, { useEffect } from 'react'

import { CustomPagination } from 'common/components/CustomPagination/CustomPagination'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { PackList } from 'features/packs/PackList/PackList'
import { fetchPacksTC, setSearchParams } from 'features/packs/packsSlice'
import { SearchPackPanel } from 'features/packs/SearchPackPanel/SearchPackPanel'

export const Packs = () => {
  const packName = useAppSelector(state => state.packs.searchParams.packName)
  const sortPacks = useAppSelector(state => state.packs.searchParams.sortPacks)
  const page = useAppSelector(state => state.packs.searchParams.page)
  const pageCount = useAppSelector(state => state.packs.searchParams.pageCount)
  const min = useAppSelector(state => state.packs.searchParams.min)
  const max = useAppSelector(state => state.packs.searchParams.max)
  const use_id = useAppSelector(state => state.packs.searchParams.user_id)
  const cardPacksTotalCount = useAppSelector(state => state.packs.cardPacksTotalCount)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPacksTC())
  }, [min, max, page, pageCount, packName, sortPacks, use_id])

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
