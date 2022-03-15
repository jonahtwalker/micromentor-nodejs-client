import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getEntrepreneurProfiles', () => {
  before(helpers.initTests)

  it('retrieves a PaginatedEntrepreneurProfileList', async () => {
    const listPage = 2 // Setting a listPage gets us truthy next and previous values
    const entrepreneurProfiles = await api.getEntrepreneurProfiles(listPage)
    if (!entrepreneurProfiles.count) {
      console.log('getEntrepreneurProfiles.retrieves a PaginatedEntrepreneurProfileList: entrepreneurProfiles does not have a count; skipping')
      return
    }
    expect(entrepreneurProfiles.results).to.be.an('array')
  })
})
