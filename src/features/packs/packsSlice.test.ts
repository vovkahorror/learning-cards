import { CardPacksType, PacksParamsType, PacksResponseType } from 'features/packs/packsAPI'
import {
  clearSearchParams,
  fetchPacksTC,
  PacksInitialStateType,
  packsReducer,
  setSearchParams,
} from 'features/packs/packsSlice'

let startState: PacksInitialStateType

beforeEach(() => {
  startState = {
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
  }
})

test('value "searchParams" should be changed', () => {
  const action = setSearchParams({ packName: 'MyPack', page: 2, user_id: '1234321' })
  const endState = packsReducer(startState, action)

  expect(endState.searchParams.user_id).toBe('1234321')
  expect(endState.searchParams.page).toBe(2)
  expect(endState.searchParams.packName).toBe('MyPack')
  expect(endState.cardPacksTotalCount).toBe(0)
  expect(endState.cardPacks).toEqual([])
})

test('data state should be changed on "clearSearchParams"', () => {
  startState = {
    cardPacks: [] as CardPacksType[],
    searchParams: {
      packName: 'MyPack',
      user_id: '12344321',
      min: 4,
      max: 8,
      sortPacks: '0updated',
      page: 3,
      pageCount: 6,
      block: false,
    } as PacksParamsType,
    cardPacksTotalCount: 200,
    minCardsCount: 10,
    maxCardsCount: 20,
  }
  const action = clearSearchParams()
  const endState = packsReducer(startState, action)

  expect(endState.searchParams.page).toBe(1)
  expect(endState.searchParams.pageCount).toBe(10)
  expect(endState.minCardsCount).toBe(0)
  expect(endState.maxCardsCount).toBe(0)
  expect(endState.cardPacksTotalCount).toBe(200)
  expect(endState.searchParams.user_id).toBe('12344321')
  expect(endState.searchParams.packName).toBe('')
})

test('response data should be changed to state on "fetchPacksTC"', () => {
  const responseData: PacksResponseType = {
    cardPacks: [
      {
        _id: 'idTest',
        user_id: 'user_id_test',
        user_name: 'Baki',
        private: false,
        name: 'Card1',
        path: '',
        grade: 3,
        shots: 2,
        deckCover: '',
        cardsCount: 4,
        type: '',
        rating: 0,
        created: '01.02.2022',
        updated: '01.02.2022',
        more_id: 'asdasdasdasd',
        __v: 0,
      },
      {
        _id: 'idTest2',
        user_id: 'user_id_test2',
        user_name: 'Baki2',
        private: false,
        name: 'Card2',
        path: '',
        grade: 4,
        shots: 1,
        deckCover: '',
        cardsCount: 4,
        type: '',
        rating: 0,
        created: '01.02.2022',
        updated: '01.02.2022',
        more_id: 'sdfsdf',
        __v: 0,
      },
    ],
    page: 4,
    pageCount: 10,
    cardPacksTotalCount: 210,
    minCardsCount: 0,
    maxCardsCount: 78,
    token: '123321',
    tokenDeathTime: 123456789,
  }

  const action = { type: fetchPacksTC.fulfilled.type, payload: responseData }
  const endState = packsReducer(startState, action)

  expect(endState.cardPacks.length).toBe(2)
  expect(endState.searchParams.page).toBe(4)
  expect(endState.searchParams.pageCount).toBe(10)
  expect(endState.minCardsCount).toBe(0)
  expect(endState.maxCardsCount).toBe(78)
  expect(endState.cardPacksTotalCount).toBe(210)
})
