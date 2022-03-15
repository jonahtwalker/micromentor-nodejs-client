import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getEntrepreneurProfile', () => {
  before(helpers.initTests)

  it('retrieves a single EntrepreneurProfile', async () => {
    const profileId = process.env.ENTREPRENEUR_PROFILE_ID_0
    if (!profileId) {
      console.log('getEntrepreneurProfile retrieves a single EntrepreneurProfile: no profile ID given; skipping')
      return
    }
    const profile = await api.getEntrepreneurProfile(profileId)
    expect(profile.id.toString()).to.equal(profileId)
  })
})
