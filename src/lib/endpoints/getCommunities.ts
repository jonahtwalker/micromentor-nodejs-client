import { PaginatedCommunityList } from '../definitions'
import helpers from '../helpers'

const getCommunities = (page?: number): Promise<PaginatedCommunityList> => {
  return helpers.placeApiRequest<PaginatedCommunityList>(`/communities/${page ? `?page=${page}` : ''}`, 'get')
}

export default getCommunities
