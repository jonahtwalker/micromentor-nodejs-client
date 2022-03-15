import { EntrepreneurProfile } from '../../definitions'
import helpers from '../../helpers'

const getEntrepreneurProfile = (profileId: number | string): Promise<EntrepreneurProfile> => {
  return helpers.placeApiRequest<EntrepreneurProfile>(`/entrepreneur-profiles/${profileId}`, 'get')
}

export default getEntrepreneurProfile
