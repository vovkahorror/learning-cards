import React, { useEffect } from 'react'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { PackList } from 'features/packs/PackList/PackList'
import { fetchPacksTC } from 'features/packs/packsSlice'
import { SearchPackPanel } from 'features/packs/SearchPackPanel/SearchPackPanel'

export const Packs = () => {
  const packName = useAppSelector(state => state.packs.searchParams.packName)
  const page = useAppSelector(state => state.packs.searchParams.page)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchPacksTC())
  }, [page])

  return (
    <div>
      <SearchPackPanel />
      <PackList />
    </div>
  )
}
