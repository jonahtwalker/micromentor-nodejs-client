import { PaginatedBaseProfileList } from '../../definitions'
import helpers from '../../helpers'

const getBaseProfiles = (page?: number): Promise<PaginatedBaseProfileList> => {
  return helpers.placeApiRequest<PaginatedBaseProfileList>(`/base-profiles/${page ? `?page=${page}` : ''}`, 'get')
}

export default getBaseProfiles
