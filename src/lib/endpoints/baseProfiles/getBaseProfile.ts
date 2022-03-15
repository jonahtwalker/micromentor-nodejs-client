import { BaseProfile } from '../../definitions'
import helpers from '../../helpers'

const getBaseProfile = (profileId: number | string): Promise<BaseProfile> => {
  return helpers.placeApiRequest<BaseProfile>(`/base-profiles/${profileId}`, 'get')
}

export default getBaseProfile
