import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardType } from 'features/cards/cardsAPI'

const cardsSLice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 1,
    page: 1,
    pageCount: 7,
    packUserId: '',
  } as CardsStateType,
  reducers: {
    setStateData(state, action: PayloadAction<CardsStateType>) {
      state = action.payload
    },
  },
})

export type CardsStateType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
