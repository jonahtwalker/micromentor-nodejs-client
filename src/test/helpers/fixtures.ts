import { faker } from '@faker-js/faker'
import { CountryEnum, EthnicityEnum, ExpertiseEnum, GenderEnum, IndustriesEnum, LanguageEnum, PreferredLanguageEnum, ProfileTypeIntentionEnum, VentureStageEnum, VentureTypeEnum, WebsiteTypeEnum } from '../../lib/enums'
import { BaseProfile, EntrepreneurProfile } from '../../lib/definitions'

function oneOf<T> (arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

const entrepreneur = (): Partial<BaseProfile> => ({
  user: {
    email: 'node-client-test@micromentor.org',
    first_name: 'Manni',
    last_name: 'Plopp',
    sso_idp: 'mm',
    is_active: true,
  },
  profile_type_intention: ProfileTypeIntentionEnum.entrepreneur,
  preferred_language: PreferredLanguageEnum.en,
  community: 129,
  country_of_residence: CountryEnum.US,
  phone_number: '+15036220002',
  birth_year: 1900,
  gender: GenderEnum.m,
  city: 'Portland',
  state: 'OR',
})

const entrepreneurProfile = (): Partial<EntrepreneurProfile> => ({
  venture_industry: oneOf(Object.values(IndustriesEnum)),
  venture_name: faker.company.companyName(),
  venture_launch_date: faker.date.past().toString(),
  venture_type: oneOf(Object.values(VentureTypeEnum)),
  venture_stage: oneOf(Object.values(VentureStageEnum)),
  venture_description: faker.lorem.sentences(1),
  venture_current_challenges: faker.lorem.sentences(1),
  venture_actions_taken: faker.lorem.sentences(1),
  venture_future_goals: faker.lorem.sentences(1),
  venture_motivations_for_mentorship: faker.lorem.sentences(1),
  venture_expertise: [{ expertise: oneOf(Object.values(ExpertiseEnum))},],
  venture_countries: [{ country: oneOf(Object.values(CountryEnum)) },],
  venture_websites: [
    {
      url: faker.internet.url(),
      website_type: {
        websiteType: oneOf(Object.values(WebsiteTypeEnum))
      }
    },
  ],
})

const fixtures = {
  entrepreneur,
  entrepreneurProfile,
}

export default fixtures
