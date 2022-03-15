import {
  CountryEnum,
  EthnicityEnum,
  ExpertiseEnum,
  GenderEnum,
  IndustriesEnum,
  LanguageEnum,
  PreferredLanguageEnum,
  ProfileTypeIntentionEnum,
  VentureStageEnum,
  VentureTypeEnum,
  WebsiteTypeEnum
} from './enums'

export interface Community {
  id: number
  name: string
}

export interface MemberConversation {
  id: number
  created?: string
  conversation_with: {
    id: number
    user: LimitedUser
    avatar_urls: ProfileAvatarUrl
    community: number
  }
  mentor_profile_id: number | null
  last_msg_date: string
  unread_msgs: boolean
}

export interface MicroMentorConfig {
  apiRootUrl?: string
  authToken?: string
}

export interface LimitedUser {
  first_name: string
  last_name: string
}

export interface ProfileAvatarUrl {
  small_avatar_url: string | null
  medium_avatar: string | null
  large_avatar: string | null
}

export interface VentureWebsite {
  url?: string
  website_type?: WebsiteType
}

export interface User {
  email: string
  first_name: string
  last_name: string
  created: string
  last_login: string
  last_activity: string
  sso_idp: string
  is_active?: boolean
}

// ========================= ENUMS =========================

export interface Country {
  country: CountryEnum
}

export interface Ethnicity {
  ethnicity: EthnicityEnum
}

export interface Gender {
  gender: GenderEnum
}

export interface Industry {
  industry: IndustriesEnum
}

export interface Language {
  language: LanguageEnum
}

export interface MentorCountry {
  country: CountryEnum
}
export interface MentorExpertise {
  expertise: ExpertiseEnum
}

export interface ProfileTypeIntention {
  profileTypeIntention: ProfileTypeIntentionEnum
}

export interface VentureCountry {
  country: CountryEnum
}

export interface VentureExpertise {
  expertise: ExpertiseEnum
}

export interface VentureStage {
  ventureStage: VentureStageEnum
}

export interface VentureType {
  ventureType: VentureTypeEnum
}

export interface WebsiteType {
  websiteType: WebsiteTypeEnum
}

// ======================= PROFILES =======================

export interface BaseProfile {
  id: number
  user: Partial<User>
  avatar_urls: ProfileAvatarUrl
  profile_type_intention: string | null
  preferred_language?: PreferredLanguageEnum
  languages_spoken?: Language[]
  community?: number
  country_of_residence?: string | null
  phone_number?: string | null
  birth_year?:  number | null
  gender?: GenderEnum
  gender_self_described?: string | null
  ethnicity?: Ethnicity | null
  city?: string | null
  state?: string | null
}

export interface ConversationProfile {
  id: number
  user: LimitedUser
  avatar_urls: ProfileAvatarUrl
  community: number
}

export interface EntrepreneurProfile {
  id: number
  base_profile: string
  venture_industry?: string | null
  venture_name?: string | null
  venture_launch_date?: string | null
  venture_type?: string | null
  venture_stage?: string | null
  venture_description?: string | null
  venture_current_challenges?: string | null
  venture_actions_taken?: string | null
  venture_future_goals?: string | null
  venture_motivations_for_mentorship?: string | null
  venture_expertise?: VentureExpertise[]
  venture_countries?: VentureCountry[]
  venture_websites?: VentureWebsite[]
}

export interface PatchedBaseProfile {
  id?: number
  user?: Partial<User>
  avatar_urls?: ProfileAvatarUrl
  profile_type_intention?: string | null
  preferred_language?: PreferredLanguageEnum
  languages_spoken?: Language[]
  community?: number
  country_of_residence?: string | null
  phone_number?: string | null
  birth_year?: number | null
  gender?: GenderEnum
  gender_self_described?: string | null
  ethnicity?: Ethnicity | null
  city?: string | null
  state?: string | null
}

export interface PatchedEntrepreneurProfile {
  id?: number
  base_profile?: string
  venture_industry?: string | null
  venture_name?: string | null
  venture_launch_date?: string | null
  venture_type?: string | null
  venture_stage?: string | null
  venture_description?: string | null
  venture_current_challenges?: string | null
  venture_actions_taken?: string | null
  venture_future_goals?: string | null
  venture_motivations_for_mentorship?: string | null
  venture_expertise?: VentureExpertise[]
  venture_countries?: VentureCountry[]
  venture_websites?: VentureWebsite[]
}

export interface RecommendedMentorProfile {
  id: number
  user: LimitedUser
  avatar_urls: ProfileAvatarUrl
  preferred_language: PreferredLanguageEnum
  languages_spoken?: Language[]
  community: number
  country_of_residence: CountryEnum
  city: string
  state: string
  mentor_industry: IndustriesEnum
  years_management_experience: number
  years_ownership_experience: number
  company: string
  company_job: string
  mentor_website_url: string
  mentor_expertise?: MentorExpertise[]
  mentor_countries?: MentorCountry[]
}

// ======================= LISTS =======================

export interface PaginatedBaseProfileList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: BaseProfile[]
}

export interface PaginatedCommunityList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: Community[]
}

export interface PaginatedEntrepreneurProfileList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: EntrepreneurProfile[]
}

export interface PaginatedMemberConversationList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: MemberConversation[]
}

export interface PaginatedRecommendedMentorProfileList {
  count?: number
  next?: string | null
  previous?: string | null
  results?: RecommendedMentorProfile[]
}

