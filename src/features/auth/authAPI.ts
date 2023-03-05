import { AxiosResponse } from 'axios'

import { instance, instanceRecovery } from 'common/instance/instance'

export const authAPI = {
  register(email: string, password: string) {
    return instance.post('/auth/register', { email, password })
  },
  recoveryPassword(payload: RequestRecoveryType) {
    return instanceRecovery.post<RequestRecoveryType, AxiosResponse<{ info: string }>>(
      'auth/forgot',
      payload
    )
  },
}

// types
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

export type RequestRecoveryType = {
  email: string
  from: string
  message: string
}
