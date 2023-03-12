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
