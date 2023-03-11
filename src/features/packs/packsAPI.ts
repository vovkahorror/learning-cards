import { instance } from 'common/instance/instance'

export const packsAPI = {
  getPacks: () => {
    return instance.get('cards/pack')
  },
}
