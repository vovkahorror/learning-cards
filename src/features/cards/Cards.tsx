import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { BackToPacks } from 'common/components/BackToPacksList/BackToPacksList'
import { CustomPagination } from 'common/components/CustomPagination/CustomPagination'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardList } from 'features/cards/CardList/CardList'
import { EmptyCardList } from 'features/cards/CardList/EmptyCardList'
import { CardType } from 'features/cards/cardsAPI'
import { addCardTC, getCardsDataTC } from 'features/cards/cardsSlise'
import { SearchCardPanel } from 'features/cards/SearchCardPanel/SearchCardPanel'

export const Cards = () => {
  const [searchParams, setSearchParams] = useState('')
  const dispatch = useAppDispatch()
  const { cardsPack_id } = useParams()
  const navigate = useNavigate()

  const userId = useAppSelector<string>(state => state.auth.user._id)
  const packUserId = useAppSelector<string>(state => state.cards.packUserId)
  const cards = useAppSelector<CardType[]>(state => state.cards.cards)
  const page = useAppSelector(state => state.cards.page)
  const pageCount = useAppSelector(state => state.cards.pageCount)
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)

  const isNotEmptyPack = !!cards.length
  const isMyPack = userId === packUserId

  const addNewCard = () => {
    if (cardsPack_id) {
      dispatch(addCardTC({ cardsPack_id, question: 'NEW QUESTION', answer: 'NEW ANSWER' }))
    }
  }

  const setPagination = (page: number, pageCount: number) => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, page, pageCount }))
    }
  }

  const goToPackList = () => navigate(-1)

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, cardAnswer: searchParams, page, pageCount }))
    }
  }, [cardsPack_id, searchParams, page, pageCount])

  return (
    <div>
      <BackToPacks onClick={goToPackList} />
      <SearchCardPanel
        isNotEmptyPack={isNotEmptyPack}
        isMyPack={isMyPack}
        setSearchParams={setSearchParams}
        addNewCard={addNewCard}
      />
      {isNotEmptyPack ? (
        <CardList cards={cards} isMyPack={isMyPack} />
      ) : (
        <EmptyCardList isMyPack={isMyPack} addNewCard={addNewCard} />
      )}
      {isNotEmptyPack && (
        <CustomPagination
          page={page}
          pageCount={pageCount}
          totalCount={cardsTotalCount}
          setPagination={setPagination}
        />
      )}
    </div>
  )
}
