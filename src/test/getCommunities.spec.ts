import 'mocha'
import { expect } from 'chai'
import api from '../lib'
import helpers from './helpers'

describe('getCommunities', () => {
  before(helpers.initTests)

  it('retrieves a list of base profiles', async () => {
    const listPage = 2 // Setting a listPage gets us non-null next and previous values
    const communities = await api.getCommunities(listPage)
    if (!communities.count) {
      console.log('getCommunities.retrieves a PaginatedCommunityList: communities does not have a count; skipping')
      return
    }
    expect(communities.results).to.be.an('array')
  })
})
