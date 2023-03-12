import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import { setStatusLoading } from 'app/appSlice'
import { errorUtils } from 'common/utils/error-utils'
import { CardPacksType, EditPackType, NewPackType, packsAPI } from 'features/packs/packsAPI'

export const fetchPacksTC = createAsyncThunk('packs/fetchPacks', async (_, { dispatch }) => {
  dispatch(setStatusLoading(true))
  try {
    const res = await packsAPI.getPacks()

    return res.data.cardPacks
  } catch (e) {
    errorUtils(e as AxiosError, dispatch)
  } finally {
    dispatch(setStatusLoading(false))
  }
})

export const addPackTC = createAsyncThunk(
  'packs/addPack',
  async (cardsPack: NewPackType, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      await packsAPI.addPack(cardsPack)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const editPackTC = createAsyncThunk(
  'packs/editPack',
  async (cardsPack: EditPackType, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      await packsAPI.editPack(cardsPack)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

export const deletePackTC = createAsyncThunk(
  'packs/deletePack',
  async (id: string, { dispatch }) => {
    dispatch(setStatusLoading(true))
    try {
      await packsAPI.deletePack(id)

      dispatch(fetchPacksTC())

      return
    } catch (e) {
      errorUtils(e as AxiosError, dispatch)
    } finally {
      dispatch(setStatusLoading(false))
    }
  }
)

const packsSlice = createSlice({
  name: 'packs',
  initialState: {
    cardPacks: [] as CardPacksType[],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPacksTC.fulfilled, (state, action) => {
      if (action.payload) state.cardPacks = action.payload
    })
  },
})

export const packsReducer = packsSlice.reducer



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
