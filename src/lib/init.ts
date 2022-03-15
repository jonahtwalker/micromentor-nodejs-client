import { MicroMentorConfig } from './definitions'
import { MicroMentorError } from './enums'
import data from './libData'

const init = (config?: MicroMentorConfig): void => {
  const config2 = config ? { ...config } : {}

  if (!config || !config.apiRootUrl) {
    config2.apiRootUrl = process.env.MM_API_API_ROOT_URL
  }

  if (!config || !config.authToken) {
    config2.authToken = process.env.MM_API_AUTH_TOKEN
  }

  if (!config2.apiRootUrl || !config2.apiRootUrl) {
    throw new Error(MicroMentorError.INVALID_CONFIG)
  }

  data.setConfig(config2)
}

export default init
