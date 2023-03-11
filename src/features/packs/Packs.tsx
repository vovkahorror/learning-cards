import React from 'react'

import { PackList } from 'features/packs/PackList/PackList'
import { SearchPackPanel } from 'features/packs/SearchPackPanel/SearchPackPanel'

export const Packs = () => {
  return (
    <div>
      <SearchPackPanel />
      <PackList />
    </div>
  )
}
