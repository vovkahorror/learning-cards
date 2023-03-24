import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { BackToPacks } from 'common/components/BackToPacksList/BackToPacksList'
import { CustomPagination } from 'common/components/CustomPagination/CustomPagination'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { CardList } from 'features/cards/CardList/CardList'
import { EmptyCardList } from 'features/cards/CardList/EmptyCardList'
import { addCardTC, getCardsDataTC, setTotalCount } from 'features/cards/cardsSlice'
import { SearchCardPanel } from 'features/cards/SearchCardPanel/SearchCardPanel'
import { packsSelectors } from 'features/packs'

export const Cards = () => {
  const cardPacksTotalCount = useAppSelector(packsSelectors.cardPacksTotalCount)
  const [searchParams, setSearchParams] = useState('')
  const [currentPacksCount, setCurrentPacksCount] = useState(cardPacksTotalCount)
  const dispatch = useAppDispatch()
  const { cardsPack_id } = useParams()
  const navigate = useNavigate()

  const userId = useAppSelector(state => state.auth.user._id)
  const packUserId = useAppSelector(state => state.cards.packUserId)
  const cards = useAppSelector(state => state.cards.cards)
  const page = useAppSelector(state => state.cards.page)
  const pageCount = useAppSelector(state => state.cards.pageCount)
  const cardsTotalCount = useAppSelector(state => state.cards.cardsTotalCount)

  const [empty, setEmpty] = useState(0)

  const isNotEmptyPack = !!cards.length
  const isMyPack = userId === packUserId

  useEffect(() => {
    if (cardsTotalCount !== 0) {
      setEmpty(cardsTotalCount)
    }
  }, [cardsTotalCount])

  useEffect(() => {
    if (cardPacksTotalCount !== currentPacksCount) {
      goToPackList()
    }
  }, [cardPacksTotalCount])

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, cardAnswer: searchParams }))
    }
  }, [cardsPack_id, searchParams])

  const addNewCard = (format: string | null, question: string, answer: string) => {
    if (cardsPack_id) {
      dispatch(addCardTC({ cardsPack_id, question, answer }))
    }
  }

  const setPagination = (page: number, pageCount: number) => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC({ cardsPack_id, page, pageCount }))
    }
  }

  const goToPackList = () => {
    navigate(-1)
    dispatch(setTotalCount(0))
  }

  const navigateToLearn = () => {
    navigate(`/learn/${cardsPack_id}`)
  }

  return (
    <div>
      <BackToPacks onClick={goToPackList} />
      <SearchCardPanel
        isNotEmptyPack={!!empty}
        isMyPack={isMyPack}
        cardsPack_id={cardsPack_id}
        setSearchParams={setSearchParams}
        addNewCard={addNewCard}
        navigateToLearn={navigateToLearn}
      />
      {empty === 0 ? (
        <EmptyCardList isMyPack={isMyPack} addNewCard={addNewCard} />
      ) : (
        <CardList cardsPack_id={cardsPack_id} cards={cards} isMyPack={isMyPack} />
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
