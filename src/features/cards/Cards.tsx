import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

import { CustomPagination } from 'common/components/CustomPagination/CustomPagination'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardList } from 'features/cards/CardList/CardList'
import { getCardsDataTC } from 'features/cards/cardsSlise'
import { SearchCardPanel } from 'features/cards/SearchCardPanel/SearchCardPanel'

export const Cards = () => {
  const [searchParams, setSearchParams] = useState('')

  const userId = useAppSelector<string>(state => state.auth.user._id)
  const packName = useAppSelector(state => state.packs.searchParams.packName)
  const page = useAppSelector(state => state.cards.page)
  const pageCount = useAppSelector(state => state.cards.pageCount)
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)

  const dispatch = useAppDispatch()
  const { cardsPack_id } = useParams()

  const setPagination = (page: number, pageCount: number) => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, page, pageCount }))
    }
  }

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, cardAnswer: searchParams, page, pageCount }))
    }
  }, [cardsPack_id, searchParams, page, pageCount])

  return (
    <div>
      <SearchCardPanel setSearchParams={setSearchParams} />
      <CardList userId={userId} />
      <CustomPagination
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        setPagination={setPagination}
      />
    </div>
  )
}
