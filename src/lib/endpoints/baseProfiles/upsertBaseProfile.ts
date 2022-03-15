import { BaseProfile, PatchedBaseProfile } from '../../definitions'
import helpers from '../../helpers'

const upsertBaseProfile = (profileInfo:Partial<BaseProfile>): Promise<BaseProfile> => {
  // A new profile/user should be marked active:
  if (
    !profileInfo.id &&
    profileInfo.user.is_active !== true &&
    profileInfo.user.is_active !== false
  ) {
    profileInfo.user.is_active = true
  }

  if (profileInfo.id) {
    return helpers.placeApiRequest<BaseProfile, Partial<BaseProfile>>(
      `/base-profiles/${profileInfo.id}/`,
      'patch',
      profileInfo,
    )
  }

  return helpers.placeApiRequest<BaseProfile, Partial<BaseProfile>>(
    `/base-profiles/`,
    'post',
    profileInfo,
  )
}

export default upsertBaseProfile
