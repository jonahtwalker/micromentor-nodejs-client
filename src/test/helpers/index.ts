import 'dotenv/config'
import api from '../../lib'

const initTests = () => {
  if (!process.env.MM_API_API_ROOT_URL) {
    throw new Error('No configuration given.')
  }
  if (process.env.MM_API_API_ROOT_URL.toLowerCase().includes('//micromentor.org')) {
    throw new Error('Do not run the test suite with the production API!')
  }
  api.init()
}

const testHelpers = {
  initTests,
}

export default testHelpers
