import { instance } from 'common/instance/instance'
import { CardsStateType } from 'features/cards/cardsSlise'

export const cardsAPI = {
  getCards: (params: GetCardsParamsType) => {
    return instance.get<CardsStateType>('cards/card', { params })
  },
  addCard: (card: CardModelType) => {
    return instance.post('cards/card', { card })
  },
  deleteCard: (cardId: string) => {
    return instance.delete('cards/card', { params: { id: cardId } })
  },
  updateCard: (card: CardType) => {
    return instance.put('cards/card', { card })
  },
}

type GetCardsParamsType = {
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

type CardModelType = {
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
