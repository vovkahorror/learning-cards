import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setStatusLoading } from 'app/appSlice'
import { RootStateType } from 'app/store'
import { errorUtils } from 'common/utils/error-utils'
import {
  CardPacksType,
  EditPackType,
  NewPackType,
  packsAPI,
  PacksParamsType,
} from 'features/packs/packsAPI'

export type SearchParamsType = {
  packName?: string
  min?: number
  max?: number
  sortPacks?: string
  page?: number
  pageCount?: number
  user_id?: string | null
  block?: boolean
}

export type PacksInitialStateType = ReturnType<typeof packsSlice.getInitialState>

export const fetchPacksTC = createAsyncThunk(
  'packs/fetchPacks',
  async (arg: { user_id: string } | undefined, { dispatch, getState }) => {
    dispatch(setStatusLoading('local'))
    const { packs } = getState() as RootStateType
    const params = { ...packs.searchParams, ...arg }

    try {
      const res = await packsAPI.getPacks(params)

      return res.data
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const addPackTC = createAsyncThunk(
  'packs/addPack',
  async (cardsPack: NewPackType, { dispatch }) => {
    dispatch(setStatusLoading('local'))
    try {
      await packsAPI.addPack(cardsPack)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const editPackTC = createAsyncThunk(
  'packs/editPack',
  async (cardsPack: EditPackType, { dispatch }) => {
    dispatch(setStatusLoading('local'))
    try {
      await packsAPI.editPack(cardsPack)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

export const deletePackTC = createAsyncThunk(
  'packs/deletePack',
  async (id: string, { dispatch }) => {
    dispatch(setStatusLoading('local'))
    try {
      await packsAPI.deletePack(id)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading('idle'))
    }
  }
)

const packsSlice = createSlice({
  name: 'packs',
  initialState: {
    cardPacks: [] as CardPacksType[],
    searchParams: {
      packName: '',
      user_id: '',
      min: 0,
      max: 0,
      sortPacks: '0updated',
      page: 1,
      pageCount: 10,
      block: false,
    } as PacksParamsType,
    cardPacksTotalCount: 0,
    minCardsCount: 0,
    maxCardsCount: 0,
  },
  reducers: {
    setSearchParams: (state, action: PayloadAction<SearchParamsType>) => {
      state.searchParams = { ...state.searchParams, ...action.payload }
    },
    clearSearchParams: state => {
      state.searchParams.packName = ''
      state.searchParams.min = state.minCardsCount
      state.searchParams.max = state.maxCardsCount
      state.searchParams.sortPacks = ''
      state.searchParams.page = 1
      state.searchParams.pageCount = 10
      state.minCardsCount = 0
      state.maxCardsCount = 0
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPacksTC.fulfilled, (state, action) => {
      if (action.payload) {
        state.cardPacks = action.payload.cardPacks
        state.searchParams.page = action.payload.page
        state.searchParams.pageCount = action.payload.pageCount
        state.minCardsCount = action.payload.minCardsCount
        state.maxCardsCount = action.payload.maxCardsCount
        state.cardPacksTotalCount = action.payload.cardPacksTotalCount
      }
    })
  },
})

export const packsReducer = packsSlice.reducer
export const { setSearchParams, clearSearchParams } = packsSlice.actions
