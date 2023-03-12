import React, { useEffect } from 'react'

import { useAppSelector } from 'common/hooks/useAppSelector'
import { PackList } from 'features/packs/PackList/PackList'
import { SearchPackPanel } from 'features/packs/SearchPackPanel/SearchPackPanel'

export const Packs = () => {
  const packName = useAppSelector(state => state.packs.searchParams.packName)
  const page = useAppSelector(state => state.packs.searchParams.page)

  useEffect(() => {}, [])

  return (
    <div>
      <SearchPackPanel />
      <PackList />
    </div>
  )
}
