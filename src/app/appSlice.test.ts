import {
  AppInitialStateType,
  appReducer,
  setAppTheme,
  setInfoSnackbar,
  setIsInitialized,
  setStatusLoading,
} from 'app/appSlice'

let startState: AppInitialStateType

beforeEach(() => {
  startState = {
    statusLoading: 'idle',
    infoSnackbar: { text: null, variant: undefined },
    isInitialized: false,
    appTheme: 'light',
  }
})

test('value "statusLoading" should be changed', () => {
  const action = setStatusLoading('global')
  const endState = appReducer(startState, action)

  expect(endState.statusLoading).toBe('global')
  expect(endState.isInitialized).toBeFalsy()
  expect(endState.infoSnackbar).toEqual({ text: null, variant: undefined })
})

test('value "infoSnackbar" should be changed', () => {
  const action = setInfoSnackbar({ text: 'Error', variant: 'warning' })
  const endState = appReducer(startState, action)

  expect(endState.infoSnackbar.text).toBe('Error')
  expect(endState.infoSnackbar.variant).toBe('warning')
  expect(endState.statusLoading).toBe('idle')
  expect(endState.isInitialized).toBeFalsy()
})

test('value "isInitialized" should be changed', () => {
  const action = setIsInitialized(true)
  const endState = appReducer(startState, action)

  expect(endState.isInitialized).toBeTruthy()
  expect(endState.infoSnackbar).toEqual({ text: null, variant: undefined })
  expect(endState.statusLoading).toBe('idle')
})

test('value "appTheme" should be changed', () => {
  const action = setAppTheme('dark')
  const endState = appReducer(startState, action)

  expect(endState.appTheme).toBe('dark')
  expect(endState.isInitialized).toBeFalsy()
  expect(endState.statusLoading).toBe('idle')
})
