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

test('value "isSetRecovery" should be changed', () => {
  const action = setRecovery(true)
  const endState = authReducer(startState, action)

  expect(endState.isSetRecovery).toBeTruthy()
  expect(endState.isLoggedIn).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('value "userEmail" should be added', () => {
  const action = setUserEmail('test@gmail.com')
  const endState = authReducer(startState, action)

  expect(endState.userEmail).toBe('test@gmail.com')
  expect(endState.isLoggedIn).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('value "isSetNewPassword" should be changed', () => {
  const action = setNewPassword(true)
  const endState = authReducer(startState, action)

  expect(endState.isSetNewPassword).toBeTruthy()
  expect(endState.isLoggedIn).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('value "registerSuccess" should be changed', () => {
  const action = setRegisterSuccess(true)
  const endState = authReducer(startState, action)

  expect(endState.registerSuccess).toBeTruthy()
  expect(endState.isLoggedIn).toBeFalsy()
  expect(endState.isSetRecovery).toBeFalsy()
})

test('value "isLoggedIn" should be changed', () => {
  const action = setIsLoggedIn(true)
  const endState = authReducer(startState, action)

  expect(endState.isLoggedIn).toBeTruthy()
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.user).toEqual({})
})

test('user data should be added', () => {
  const UserData: UserType = {
    _id: '12344321',
    email: 'test@gmail.com',
    rememberMe: true,
    isAdmin: false,
    name: 'Bot',
    verified: true,
    publicCardPacksCount: 10,
    created: '01.02.2022',
    updated: '01.02.2023',
    __v: 0,
    token: '123123123123test',
    tokenDeathTime: 123312312,
    avatar: 'avatar.png',
  }
  const action = setUserData(UserData)
  const endState = authReducer(startState, action)

  expect(endState.user).toEqual(UserData)
  expect(endState.isSetRecovery).toBeFalsy()
  expect(endState.registerSuccess).toBeFalsy()
})
