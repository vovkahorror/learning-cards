import { instance } from 'common/instance/instance'
import { CardsStateType } from 'features/cards/cardsSlice'

export const cardsAPI = {
  getCards: (params: GetCardsParamsType) => {
    return instance.get<CardsStateType>('cards/card', { params })
  },
  addCard: (card: NewCardType) => {
    return instance.post('cards/card', { card })
  },
  deleteCard: (cardId: string) => {
    return instance.delete('cards/card', { params: { id: cardId } })
  },
  updateCard: (card: CardModelType) => {
    return instance.put('cards/card', { card })
  },
  updateGrade: (param: UpdateGradeParamsType) => {
    return instance.put<UpdateCardType>('cards/grade', param)
  },
}

export type GetCardsParamsType = {
  cardAnswer?: string
  cardQuestion?: string
  cardsPack_id: string
  min?: number
  max?: number
  sortCards?: string
  page?: number
  pageCount?: number
}

export type CardType = {
  answer: string
  question: string
  cardsPack_id: string
  grade: number
  shots: number
  user_id: string
  created: string
  updated: string
  _id: string
}

export type NewCardType = {
  cardsPack_id: string
  question?: string
  answer?: string
  grade?: number
  shots?: number
  answerImg?: string
  questionImg?: string
  questionVideo?: string
  answerVideo?: string
}

export type CardModelType = {
  _id: string
  answer?: string
  question?: string
  cardsPack_id?: string
  grade?: number
  shots?: number
  user_id?: string
  created?: string
  updated?: string
}

export enum Sort {
  up = 0,
  down = 1,
}

export type UpdateGradeParamsType = {
  grade: number
  card_id: string
}

type UpdateCardType = {
  token: string
  tokenDeathTime: number
  updatedGrade: {
    card_id: string
    cardsPack_id: string
    created: string
    grade: number
    more_id: string
    shots: number
    updated: string
    user_id: string
    __v: number
    _id: string
  }
}
