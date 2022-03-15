import { PaginatedEntrepreneurProfileList } from '../../definitions'
import helpers from '../../helpers'

const getEntrepreneurProfiles = (page?: number): Promise<PaginatedEntrepreneurProfileList> => {
  return helpers.placeApiRequest<PaginatedEntrepreneurProfileList>(`/entrepreneur-profiles/${page ? `?page=${page}` : ''}`, 'get')
}

export default getEntrepreneurProfiles
