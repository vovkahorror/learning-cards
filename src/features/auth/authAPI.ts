import { AxiosResponse } from 'axios'

import { instance, instanceRecovery } from 'common/instance/instance'

export const authAPI = {
  register(email: string, password: string) {
    return instance.post('/auth/register', { email, password })
  },

  recoveryPassword(data: RequestRecoveryType) {
    return instanceRecovery.post<RequestRecoveryType, AxiosResponse<{ info: string }>>(
      'auth/forgot',
      data
    )
  },

  setNewPassword(data: RequestNewPasswordType) {
    return instanceRecovery.post<RequestNewPasswordType, AxiosResponse<{ info: string }>>(
      '/auth/set-new-password',
      data
    )
  },
}

// types
export type UserType = {
  _id: string
  email: string
  name: string
  verified: boolean
  rememberMe: boolean
  isAdmin: boolean
  updated: string
  publicCardPacksCount: number
}

export type RequestRecoveryType = {
  email: string
  from: string
  message: string
}

export type RequestNewPasswordType = {
  password: string
  resetPasswordToken: string | undefined
}
