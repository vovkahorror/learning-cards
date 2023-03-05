import { instance } from 'common/instance/instance'

export const authAPI = {
  register(email: string, password: string) {
    return instance.post<RegisterType>('/auth/register', { email, password })
  },
}

export interface RegisterType {
  created: string
  __v: number
  name: string
  verified: boolean
  _id: string
  rememberMe: boolean
  isAdmin: boolean
  updated: string
  email: string
  publicCardPacksCount: number
}
