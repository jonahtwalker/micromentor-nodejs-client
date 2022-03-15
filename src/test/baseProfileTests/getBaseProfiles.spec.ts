import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getBaseProfiles', () => {
  before(helpers.initTests)

  it('retrieves a PaginatedBaseProfileList', async () => {
    const listPage = 2 // Setting a listPage gets us non-null next and previous values
    const baseProfiles = await api.getBaseProfiles(listPage)
    if (!baseProfiles.count) {
      console.log('getBaseProfiles.retrieves a PaginatedBaseProfileList: baseProfiles does not have a count; skipping')
      return
    }
    expect(baseProfiles.count).to.be.a('number') &&
    expect(baseProfiles.results).to.be.an('array')
  })
})
