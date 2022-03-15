import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'
import faker from '@faker-js/faker'

describe('updateEntrepreneuerProfile', () => {
  before(helpers.initTests)

  it('edits a single entrepreneur profile', async () => {
    if (process.env.TESTS_CAN_UPDATE_DATA !== 'true') {
      console.log('🚦 updateEntrepreneuerProfile edits an EntrepreneurProfile: skipping API for read-only test.')
      return
    }
    const profileId = parseInt(process.env.ENTREPRENEUR_PROFILE_ID_0)
    const newVentureName = faker.company.companyName()

    await api.updateEntrepreneurProfile({
      id: profileId,
      venture_name: newVentureName,
    })

    const reloadedEntrepreneurProfile = await api.getEntrepreneurProfile(profileId)
    expect(reloadedEntrepreneurProfile.venture_name).to.equal(newVentureName)
  })
})
