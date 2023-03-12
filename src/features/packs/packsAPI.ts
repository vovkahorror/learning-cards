import { instance } from 'common/instance/instance'

export const packsAPI = {
  getPacks: (params?: PacksParamsType) => {
    return instance.get<PacksResponseType>('cards/pack', { params })
  },
  addNewPack(cardsPack: NewPackType) {
    return instance.post('/cards/pack', { cardsPack })
  },
  editPack(cardsPack: EditPackType) {
    return instance.put('/cards/pack', { cardsPack })
  },
  deletePack(id: string) {
    return instance.delete(`/cards/pack?id=${id}`)
  },
}

type PacksParamsType = {
  packName: string
  min: number
  max: number
  sortPacks: string
  page: number
  pageCount: number
  user_id: string
}

type PacksResponseType = {
  cardPacks: CardPacksType[]
  page: number
  pageCount: number
  cardPacksTotalCount: number
  minCardsCount: number
  maxCardsCount: number
  token: string
  tokenDeathTime: number
}
type CardPacksType = {
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

type NewPackType = {
  name: string
  private: boolean
  deckCover?: string
}

type EditPackType = {
  _id: string
  name: string
}
