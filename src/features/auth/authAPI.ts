type ac = {
  sadasd: string
}
import { instance } from 'common/instance/instance'

export const authAPI = {
  getTask: () => 1,
  register(email: string, password: string) {
    return instance.post('/auth/register', { email, password })
  },
  login(email: string, password: string, rememberMe: boolean) {
    return instance.post<UserType>('/auth/login', { email, password, rememberMe })
  },
}

export type UserType = {
  _id: string
  email: string
  name: string
  avatar?: string
  publicCardPacksCount: number
  created: Date
  updated: Date
  isAdmin: boolean
  verified: boolean
  rememberMe: boolean
  error?: string
}
