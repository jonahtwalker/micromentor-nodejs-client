import { PaginatedMemberConversationList } from '../../definitions'
import helpers from '../../helpers'

const getBaseProfileConversations = (profileId: number | string, page?: number): Promise<PaginatedMemberConversationList> => {
  return helpers.placeApiRequest<PaginatedMemberConversationList>(`/base-profiles/${profileId}/conversations/${page ? `?page=${page}` : ''}`, 'get')
}

export default getBaseProfileConversations
