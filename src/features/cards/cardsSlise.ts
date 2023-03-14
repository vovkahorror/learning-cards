import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setStatusLoading } from 'app/appSlice'
import { RootState } from 'app/store'
import { errorUtils } from 'common/utils/error-utils'
import { CardModelType, cardsAPI, CardType, GetCardsParamsType } from 'features/cards/cardsAPI'

export const getCardsDataTC = createAsyncThunk(
  'cards/getCardsData',
  async (params: GetCardsParamsType, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      const res = await cardsAPI.getCards(params)

      dispatch(setCardsData(res.data))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const updateCardTC = createAsyncThunk(
  'cards/updateCardTC',
  async (card: CardModelType, { dispatch, getState }) => {
    const state = getState() as RootState
    const currentCard = state.cards.cards.find(c => c._id === card._id)

    dispatch(setStatusLoading(true))
    try {
      await cardsAPI.updateCard({ ...currentCard, ...card })

      currentCard && dispatch(getCardsDataTC({ cardsPack_id: currentCard.cardsPack_id }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

const cardsSLice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 1,
    page: 1,
    pageCount: 10,
    packUserId: '',
  } as CardsStateType,
  reducers: {
    setCardsData(state, action: PayloadAction<CardsStateType>) {
      const { cards, cardsTotalCount, maxGrade, minGrade, page, pageCount, packUserId } = {
        ...state,
        ...action.payload,
      }

      state.cards = cards
      state.cardsTotalCount = cardsTotalCount
      state.maxGrade = maxGrade
      state.minGrade = minGrade
      state.page = page
      state.pageCount = pageCount
      state.packUserId = packUserId
    },
  },
})

export const cardsReducer = cardsSLice.reducer

export const { setCardsData } = cardsSLice.actions

export type CardsStateType = {
  cards: CardType[]
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
}
