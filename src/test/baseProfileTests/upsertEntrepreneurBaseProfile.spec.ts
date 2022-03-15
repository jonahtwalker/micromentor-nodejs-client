import 'mocha'
import api from '../../lib'
import faker from '@faker-js/faker'
import fixtures from '../helpers/fixtures'
import helpers from '../helpers'
import { expect } from 'chai'

describe('upsertBaseProfile', () => {
  before(helpers.initTests)

  it('creates an entrepreneur BaseProfile', async () => {
    if (process.env.TESTS_CAN_UPDATE_DATA !== 'true') {
      console.log('🚦 upsertBaseProfile edits a BaseProfile: skipping API for read-only test.')
      return
    }
    const profileInfo = fixtures.entrepreneur()

    const newProfile = await api.upsertBaseProfile(profileInfo)

    const reloadedEntrepreneurProfile = await api.getEntrepreneurProfile(newProfile.id)
    expect(newProfile.user.first_name).to.equal(profileInfo.user.first_name) &&
    expect(newProfile.id).to.equal(reloadedEntrepreneurProfile.id)
  })

  it('updates an entrepreneur BaseProfile', async () => {
    if (process.env.TESTS_CAN_UPDATE_DATA !== 'true') {
      console.log('🚦 upsertBaseProfile edits a BaseProfile: skipping API for read-only test.')
      return
    }
    const profileId = parseInt(process.env.ENTREPRENEUR_PROFILE_ID_0)
    const newFirstName = faker.company.companyName()

    await api.upsertBaseProfile({
      id: profileId,
      user: {
        first_name: newFirstName
      }
    })

    const reloadedEntrepreneurBaseProfile = await api.getBaseProfile(profileId)
    expect(reloadedEntrepreneurBaseProfile.user.first_name).to.equal(newFirstName)
  })
})
