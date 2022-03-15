import 'mocha'
import { expect } from 'chai'
import api from '../../lib'
import helpers from '../helpers'

describe('getRecommendedMentors', () => {
  before(helpers.initTests)

  it('retrieves a PaginatedRecommendedMentorProfileList', async () => {
    const profileId = process.env.ENTREPRENEUR_PROFILE_ID_0
    const listPage = 1 // Setting a listPage gets us truthy next and previous values
    const recommendedMentors = await api.getRecommendedMentors(profileId, listPage)
    if (!recommendedMentors.results) {
      console.log('getRecommendedMentors.retrieves a PaginatedRecommendedMentorProfileList: recommendedMentors does not have results; skipping')
      return
    }
    expect(recommendedMentors.results).to.be.an('array')
  })
})
