import { instance } from 'common/instance/instance'

export const packsAPI = {
  getPacks: (params: PacksParamsType) => {
    return instance.get<PacksResponseType>('cards/pack', { params })
  },
  addPack(cardsPack: NewPackType) {
    return instance.post<NewPackResponseType>('cards/pack', { cardsPack })
  },
  editPack(cardsPack: EditPackType) {
    return instance.put('cards/pack', { cardsPack })
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack?id=${id}`)
  },
}

export type PacksParamsType = {
  packName: string
  min: number
  max: number
  sortPacks: string | null
  page: number
  pageCount: number
  user_id: string | null
  block: boolean
}

export type PacksResponseType = {
  cardPacks: CardPacksType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}
export type CardPacksType = {
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

export type NewPackType = {
  name: string
  private: boolean
  deckCover?: string
}

type NewPackResponseType = {
  newCardsPack: CardPacksType
  token: string
  tokenDeathTime: number
}

export type EditPackType = {
  _id: string
  name: string
  private: boolean
}
