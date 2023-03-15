import React from 'react'

import { Pagination } from 'rsuite'

const limitOptions = [2, 4, 6, 8, 10]
const layout: any[] = ['pager', '-', 'limit', 'total']

type CustomPaginationPropsType = {
  page: number
  pageCount: number
  totalCount: number
  setPagination: (page: number, pageCount: number) => void
}

export const CustomPagination = ({
  page,
  pageCount,
  totalCount,
  setPagination,
}: CustomPaginationPropsType) => {
  const handlerSetActivePage = (value: number) => setPagination(value, pageCount)
  const handlerSetLimit = (value: number) => setPagination(page, value)

  return (
    <>
      <hr />
      <Pagination
        layout={layout}
        size={'md'}
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
        style={{ background: 'white', borderRadius: '10px', padding: '0 10px 0' }}
      />
    </>
  )
}
