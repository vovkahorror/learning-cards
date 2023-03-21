import { UserType } from 'features/auth/authAPI'
import {
  AuthInitialStateType,
  authReducer,
  setIsLoggedIn,
  setNewPassword,
  setRecovery,
  setRegisterSuccess,
  setUserData,
  setUserEmail,
} from 'features/auth/authSlice'

let startState: AuthInitialStateType

beforeEach(() => {
  startState = {
    user: {} as UserType,
    isSetRecovery: false,
    userEmail: '',
    isSetNewPassword: false,
    registerSuccess: false,
    isLoggedIn: false,
  }
})

test('default state', () => {
  const userData: UserType = {
    _id: '123Test22',
    email: 'test@gmail.com',
    rememberMe: false,
    isAdmin: false,
    name: 'test name',
    verified: false,
    publicCardPacksCount: 20,
    created: '2022-09-15T21:19:22.629Z',
    updated: '2023-03-21T15:21:54.671Z',
    __v: 0,
    token: '1cc4f7f0-c7fc-11ed-923c-f5d1ee13fa87',
    tokenDeathTime: 1679422914671,
    avatar: 'https//avatar-url.img',
  }
  const action = setUserData(userData)
  const endState = authReducer(startState, action)

  expect(endState.user).toEqual(userData)
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.userEmail).toBe('')
})

test('info about user should be add', () => {
  const action = setRecovery(true)
  const endState = authReducer(startState, action)

  expect(endState.isSetRecovery).toBeTruthy()
  expect(endState.user).toEqual({})
  expect(endState.isLoggedIn).toEqual(false)
})

test('value "isSetRecovery" should be changed', () => {
  const action = setRecovery(true)
  const endState = authReducer(startState, action)

  expect(endState.isSetRecovery).toBeTruthy()
  expect(endState.user).toEqual({})
  expect(endState.isLoggedIn).toEqual(false)
})

test('value "userEmail" should be correct added', () => {
  const email = 'test@gmail.com'
  const action = setUserEmail(email)
  const endState = authReducer(startState, action)

  expect(endState.userEmail).toEqual(email)
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('value "isSetNewPassword" should be changed', () => {
  const action = setNewPassword(true)
  const endState = authReducer(startState, action)

  expect(endState.isSetNewPassword).toBeTruthy()
  expect(endState.userEmail).toBe('')
  expect(endState.user).toEqual({})
})

test('value "registerSuccess" should be changed', () => {
  const action = setRegisterSuccess(true)
  const endState = authReducer(startState, action)

  expect(endState.registerSuccess).toBeTruthy()
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('value "isLoggedIn" should be changed on login in', () => {
  const action = setIsLoggedIn(true)
  const endState = authReducer(startState, action)

  expect(endState.isLoggedIn).toBeTruthy()
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.userEmail).toBe('')
})

test('value "isLoggedIn" should be changed on log out', () => {
  const action = setIsLoggedIn(false)
  const prevState = {
    ...startState,
    isLoggedIn: true,
  }
  const endState = authReducer(prevState, action)

  expect(endState.isLoggedIn).toBeFalsy()
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.userEmail).toBe('')
})
