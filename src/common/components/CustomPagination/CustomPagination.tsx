import React from 'react'

import { Pagination } from 'rsuite'

const limitOptions = [2, 4, 6, 8, 10]
const layout: any[] = ['pager', '-', 'limit', 'total']

type CustomPaginationPropsType = {
  page: number
  pageCount: number
  totalCount: number
  setActivePageToState: (value: number) => void
  setLimitToState: (value: number) => void
}

export const CustomPagination = ({
  page,
  pageCount,
  totalCount,
  setActivePageToState,
  setLimitToState,
}: CustomPaginationPropsType) => {
  const handlerSetActivePage = (value: number) => setActivePageToState(value)
  const handlerSetLimit = (value: number) => setLimitToState(value)

  return (
    <>
      <hr />
      <Pagination
        layout={layout}
        size={'lg'}
        prev
        next
        first
        last
        ellipsis
        boundaryLinks
        total={totalCount}
        limit={pageCount}
        limitOptions={limitOptions}
        maxButtons={3}
        activePage={page}
        onChangePage={handlerSetActivePage}
        onChangeLimit={handlerSetLimit}
        style={{ color: 'white' }}
      />
    </>
  )
}
