import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setStatusLoading } from 'app/appSlice'
import { RootStateType } from 'app/store'
import { errorUtils } from 'common/utils/error-utils'
import { cardsAPI, CardType, UpdateGradeParamsType } from 'features/cards/cardsAPI'
import { CardsStateType, setCardsData } from 'features/cards/cardsSlice'

export type LearnInitialState = ReturnType<typeof learnSlice.getInitialState>

export const getCardsPackForLearnTC = createAsyncThunk(
  'learn/getCardsPackForLearn',
  async (pack_id: string, { dispatch }) => {
    dispatch(setStatusLoading('global'))
    try {
      const res = await cardsAPI.getCards({ cardsPack_id: pack_id, pageCount: 100 })

      dispatch(setCardsPackLearn(res.data))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const updateGradeTC = createAsyncThunk(
  'learn/updateGrade',
  async (arg: UpdateGradeParamsType, { dispatch, getState }) => {
    dispatch(setStatusLoading('global'))

    const state = getState() as RootStateType

    try {
      const res = await cardsAPI.updateGrade(arg)

      const cards = state.cards.cards.map(card =>
        card._id === arg.card_id ? { ...card, grade: res.data.updatedGrade.grade } : card
      )

      dispatch(setUpdateCardsPack(res.data.updatedGrade.card_id))
      dispatch(setCardsData({ ...state.cards, cards }))
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

const learnSlice = createSlice({
  name: 'learn',
  initialState: {
    cardsPack: [] as CardType[],
    packName: '',
  },
  reducers: {
    setCardsPackLearn: (state, action: PayloadAction<CardsStateType>) => {
      state.cardsPack = action.payload.cards
      state.packName = action.payload.packName
    },
    clearCarsPackLearn: state => {
      state.cardsPack = [] as CardType[]
    },
    setUpdateCardsPack: (state, action: PayloadAction<string>) => {
      const indexPrevCard = state.cardsPack.findIndex(el => el._id === action.payload)

      state.cardsPack.splice(indexPrevCard, 1)
    },
  },
})

export const learnReducer = learnSlice.reducer
export const { setCardsPackLearn, clearCarsPackLearn, setUpdateCardsPack } = learnSlice.actions
