import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getBaseProfileConversations', () => {
  before(helpers.initTests)

  it('retrieves a PaginatedMemberConversationList', async () => {
    const profileId = process.env.ENTREPRENEUR_PROFILE_ID_0
    if (!profileId) {
      console.log('getBaseProfileConversations retrieves a PaginatedMemberConversationList: no profile ID given; skipping')
      return
    }
    const profileConversations = await api.getBaseProfileConversations(profileId)
    expect(profileConversations.count).to.be.a('number') &&
    expect(profileConversations.results).to.be.an('array')
  })
})
