import { instance } from 'common/instance/instance'

export type SearchParamsType = {
  packName: string | null
  min: number
  max: number
  sortPacks: string | null
  page: number
  pageCount: number
  user_id: string | null
  block: boolean
}

type ResponseGetPacks = {
  cardPacks: PackType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}

export type PackType = {
  _id: string
  user_id: string
  user_name: string
  private: boolean
  name: string
  path: string
  grade: number
  shots: number
  deckCover: string
  cardsCount: number
  type: string
  rating: number
  created: string
  updated: string
  more_id: string
  __v: number
}

export const packsAPI = {
  getPacks: (dataParams: SearchParamsType) => {
    return instance.get<ResponseGetPacks>('cards/pack', { params: dataParams })
  },
}
