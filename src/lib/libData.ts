import { MicroMentorConfig } from './definitions'

let config: MicroMentorConfig | undefined

const libData = {
  setConfig: (newConfig: MicroMentorConfig): void => {
    config = newConfig
  },

  getConfig: () => config,
}

export default libData
