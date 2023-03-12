import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from 'app/store'
import { packsAPI } from 'features/packs/packsAPI'

type SearchPacksType = {
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
  searchParams: {
    packName: string | null
    min: number
    max: number
    sortPacks: string | null
    page: number
    pageCount: number
    user_id: string | null
    block: boolean
  }
}

export const fetchPacksTC = createAsyncThunk(
  'packs/getPacksTC',
  async (arg: SearchPacksType, { dispatch, getState }) => {
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
