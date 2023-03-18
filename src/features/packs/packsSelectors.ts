import { RootStateType } from 'app/store'

export const packName = (state: RootStateType) => state.packs.searchParams.packName
export const sortPacks = (state: RootStateType) => state.packs.searchParams.sortPacks
export const page = (state: RootStateType) => state.packs.searchParams.page
export const pageCount = (state: RootStateType) => state.packs.searchParams.pageCount
export const min = (state: RootStateType) => state.packs.searchParams.min
export const max = (state: RootStateType) => state.packs.searchParams.max
export const cardPacksTotalCount = (state: RootStateType) => state.packs.cardPacksTotalCount
export const minCardsCount = (state: RootStateType) => state.packs.minCardsCount
export const maxCardsCount = (state: RootStateType) => state.packs.maxCardsCount
export const cardPacks = (state: RootStateType) => state.packs.cardPacks
export const user_id = (state: RootStateType) => state.packs.searchParams.user_id
