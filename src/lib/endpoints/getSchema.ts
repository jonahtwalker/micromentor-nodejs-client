import helpers from '../helpers'

const getSchema = (format: string, lang: string): Promise<{}> => {
  return helpers.placeApiRequest<{}>(`/schema/?format=${format}&lang=${lang}`, 'get')
}

export default getSchema
