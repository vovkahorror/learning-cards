import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setStatusLoading } from 'app/appSlice'
import { RootStateType } from 'app/store'
import { errorUtils } from 'common/utils/error-utils'
import {
  CardModelType,
  cardsAPI,
  CardType,
  GetCardsParamsType,
  NewCardType,
  Sort,
} from 'features/cards/cardsAPI'

export const getCardsDataTC = createAsyncThunk(
  'cards/getCardsData',
  async (params: GetCardsParamsType, { dispatch, getState }) => {
    dispatch(setStatusLoading('global'))

    const state = getState() as RootStateType
    const page = params.page || state.cards.page
    const pageCount = params.pageCount || state.cards.pageCount
    const sortType = state.cards.sort.sortType
    const sortColumn = state.cards.sort.sortColumn
    let sortCards = '0created'

    if (sortColumn && sortType) {
      sortCards = `${sortType === 'asc' ? Sort.down : Sort.up}${sortColumn}`
    }

    try {
      const res = await cardsAPI.getCards({ ...params, page, pageCount, sortCards })

      dispatch(setCardsData(res.data))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const addCardTC = createAsyncThunk(
  'cards/addCardTC',
  async (card: NewCardType, { dispatch }) => {
    dispatch(setStatusLoading('global'))

    try {
      await cardsAPI.addCard(card)

      dispatch(getCardsDataTC({ cardsPack_id: card.cardsPack_id }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const deleteCardTC = createAsyncThunk(
  'cards/deleteCardTC',
  async (cardId: string, { dispatch, getState }) => {
    dispatch(setStatusLoading('global'))

    const state = getState() as RootStateType
    const cardsPack_id = state.cards.cards.find(card => card._id === cardId)?.cardsPack_id as string

    try {
      await cardsAPI.deleteCard(cardId)

      dispatch(getCardsDataTC({ cardsPack_id }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const updateCardTC = createAsyncThunk(
  'cards/updateCardTC',
  async (card: CardModelType, { dispatch, getState }) => {
    dispatch(setStatusLoading('global'))

    const state = getState() as RootStateType
    const currentCard = state.cards.cards.find(c => c._id === card._id)

    try {
      await cardsAPI.updateCard({ ...currentCard, ...card })

      currentCard && dispatch(getCardsDataTC({ cardsPack_id: currentCard.cardsPack_id }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

const cardsSLice = createSlice({
  name: 'cards',
  initialState: {
    cards: [],
    packName: '',
    cardsTotalCount: 0,
    maxGrade: 5,
    minGrade: 1,
    page: 1,
    pageCount: 10,
    packUserId: '',
    sort: {
      sortColumn: undefined,
      sortType: undefined,
    },
  } as CardsStateType,
  reducers: {
    setCardsData(state, action: PayloadAction<CardsStateType>) {
      const { cards, packName, cardsTotalCount, maxGrade, minGrade, page, pageCount, packUserId } =
        {
          ...state,
          ...action.payload,
        }

      state.cards = cards
      state.packName = packName
      state.cardsTotalCount = cardsTotalCount
      state.maxGrade = maxGrade
      state.minGrade = minGrade
      state.page = page
      state.pageCount = pageCount
      state.packUserId = packUserId
    },
    setTotalCount: (state, action: PayloadAction<number>) => {
      state.cardsTotalCount = action.payload
    },
    setSort: (state, action: PayloadAction<TotalSortType>) => {
      state.sort = { ...action.payload }
    },
  },
})

export const cardsReducer = cardsSLice.reducer

export const { setCardsData, setTotalCount, setSort } = cardsSLice.actions

export type CardsStateType = {
  cards: CardType[]
  packName: string
  cardsTotalCount: number
  maxGrade: number
  minGrade: number
  page: number
  pageCount: number
  packUserId: string
  sort: TotalSortType
}

export type TotalSortType = {
  sortColumn: SortColumnType
  sortType: SortType
}
export type SortColumnType = string | undefined
export type SortType = 'asc' | 'desc' | undefined
