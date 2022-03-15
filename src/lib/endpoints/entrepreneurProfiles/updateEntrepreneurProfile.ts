import { EntrepreneurProfile, PatchedEntrepreneurProfile } from '../../definitions'
import helpers from '../../helpers'

const updateEntrepreneurProfile = (profileInfo: PatchedEntrepreneurProfile): Promise<EntrepreneurProfile> => 
  helpers.placeApiRequest<EntrepreneurProfile, PatchedEntrepreneurProfile>(
    `/entrepreneur-profiles/${profileInfo.id}/`,
    'patch',
    profileInfo,
  )

export default updateEntrepreneurProfile
