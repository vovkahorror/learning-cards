import React, { useEffect, useState } from 'react'

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
  const [activePage, setActivePage] = useState(1)
  const [total, setTotal] = useState(200)
  const [limit, setLimit] = useState<any>(10)

  useEffect(() => {
    setActivePage(page)
    setTotal(totalCount)
    setLimit(pageCount)
  }, [page, pageCount, totalCount])

  const handlerSetActivePage = (value: number) => setActivePageToState(value)
  const handlerSetLimit = (value: number) => setLimitToState(value)

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
        total={total}
        limit={limit}
        limitOptions={limitOptions}
        maxButtons={3}
        activePage={activePage}
        onChangePage={handlerSetActivePage}
        onChangeLimit={handlerSetLimit}
      />
    </>
  )
}
