import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'app/store'
import { packsAPI, SearchParamsType } from 'features/packs/packsAPI'

export type SearchPacksType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string
  block?: boolean
}

type InitialStateType = {
  searchParams: SearchParamsType
}

export const fetchPacksTC = createAsyncThunk(
  'packs/getPacksTC',
  async (_, { dispatch, getState }) => {
    const { packs } = getState() as RootState

    const res = await packsAPI.getPacks(packs.searchParams)
  }
)

export const PacksSlice = createSlice({
  name: 'packs',
  initialState: {
    searchParams: {
      packName: null,
      min: 3,
      max: 9,
      sortPacks: null,
      page: 1,
      pageCount: 4,
      user_id: null,
      block: false,
    },
  } as InitialStateType,
  reducers: {
    searchPacks: (state, action: PayloadAction<SearchPacksType>) => {
      state.searchParams = { ...state.searchParams, ...action.payload }
    },
  },
})

export const packsReducer = PacksSlice.reducer
export const { searchPacks } = PacksSlice.actions
