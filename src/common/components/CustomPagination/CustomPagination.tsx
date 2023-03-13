import React, { useEffect, useState } from 'react'

import { Pagination } from 'rsuite'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { setSearchParams } from 'features/packs/packsSlice'

const limitOptions = [2, 4, 6, 8, 10]
const layout: any[] = ['pager', '-', 'limit', 'total']

type CustomPaginationPropsType = {
  page: number
  pageCount: number
  cardPacksTotalCount: number
}

export const CustomPagination = ({
  page,
  pageCount,
  cardPacksTotalCount,
}: CustomPaginationPropsType) => {
  const [activePage, setActivePage] = useState(1)
  const [total, setTotal] = useState(200)
  const [limit, setLimit] = useState<any>(10)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setActivePage(page)
    setTotal(cardPacksTotalCount)
    setLimit(pageCount)
  }, [page, pageCount, cardPacksTotalCount])

  const handlerSetActivePage = (value: number) => {
    dispatch(setSearchParams({ page: value }))
  }
  const handlerSetLimit = (value: number) => {
    dispatch(setSearchParams({ pageCount: value }))
  }

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
