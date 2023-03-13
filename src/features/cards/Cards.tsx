import React, { useEffect } from 'react'

import { useParams } from 'react-router-dom'

import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { CardList } from 'features/cards/CardList/CardList'
import { getCardsDataTC } from 'features/cards/cardsSlise'

export const Cards = () => {
  const dispatch = useAppDispatch()

  const { cardsPack_id } = useParams()

  useEffect(() => {
    if (cardsPack_id) {
      dispatch(getCardsDataTC(cardsPack_id))
    }
  }, [])

  return (
    <div>
      <CardList />
    </div>
  )
}
