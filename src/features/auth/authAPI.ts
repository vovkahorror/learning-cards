type ac = {
  sadasd: string
}
import { instance } from 'common/instance/instance'

export const authAPI = {
  getTask: () => 1,
  register(email: string, password: string) {
    return instance.post('/auth/register', { email, password })
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
