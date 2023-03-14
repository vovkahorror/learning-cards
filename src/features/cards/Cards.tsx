import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { CustomPagination } from 'common/components/CustomPagination/CustomPagination'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardList } from 'features/cards/CardList/CardList'
import { getCardsDataTC } from 'features/cards/cardsSlise'

export const Cards = () => {
  const userId = useAppSelector<string>(state => state.auth.user._id)
  const packName = useAppSelector(state => state.packs.searchParams.packName)
  const page = useAppSelector(state => state.cards.page)
  const pageCount = useAppSelector(state => state.cards.pageCount)
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)

  const dispatch = useAppDispatch()
  const { cardsPack_id } = useParams()

  const setActivePageToState = (page: number) => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, page }))
    }
  }

  const setLimitToState = (pageCount: number) => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, pageCount }))
    }
  }

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, page, pageCount }))
    }
  }, [page, pageCount])

  return (
    <div>
      <CardList userId={userId} />
      <CustomPagination
        page={page}
        pageCount={pageCount}
        totalCount={cardsTotalCount}
        setActivePageToState={setActivePageToState}
        setLimitToState={setLimitToState}
      />
    </div>
  )
}
