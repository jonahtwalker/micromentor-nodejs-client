import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getBaseProfile', () => {
  before(helpers.initTests)

  it('retrieves a single BaseProfile', async () => {
    const profileId = process.env.ENTREPRENEUR_PROFILE_ID_0
    if (!profileId) {
      console.log('getBaseProfile.retrieves a single BaseProfile: no profile ID given; skipping')
      return
    }
    const profile = await api.getBaseProfile(profileId)
    expect(profile.id.toString()).to.equal(profileId)
  })
})
