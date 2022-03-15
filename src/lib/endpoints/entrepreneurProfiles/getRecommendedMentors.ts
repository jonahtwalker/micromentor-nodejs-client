import { PaginatedRecommendedMentorProfileList } from '../../definitions'
import helpers from '../../helpers'

const getRecommendedMentors = (profileId: number | string, page?: number): Promise<PaginatedRecommendedMentorProfileList> => {
  return helpers.placeApiRequest<PaginatedRecommendedMentorProfileList>(`/entrepreneur-profiles/${profileId}
    /recommended-mentors/${page ? `?page=${page}` : ''}`, 'get')
}

export default getRecommendedMentors
