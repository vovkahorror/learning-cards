import { appSelectors } from 'app'
import { PaginationContainer } from 'common/components/CustomPagination/pagination.styled'
import { useAppSelector } from 'common/hooks'

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
  const statusLoading = useAppSelector(appSelectors.statusLoading)

  const handlerSetActivePage = (value: number) => setPagination(value, pageCount)
  const handlerSetLimit = (value: number) => setPagination(page, value)

  return (
    <>
      <hr />
      <PaginationContainer
        disabled={statusLoading === 'local'}
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
      />
    </>
  )
}
