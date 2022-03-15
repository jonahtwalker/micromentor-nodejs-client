import fetch, { RequestInit } from 'node-fetch'
import libData from '../libData'

async function placeApiRequest<ResponseT, RequestT = undefined>(
  path: string,
  method: 'get' | 'post' | 'patch',
  requestBody?: RequestT,
): Promise<ResponseT> {
  const config = libData.getConfig()

  const fetchOptions: RequestInit = {
    method,
    headers: {
      Authorization: `Token ${config.authToken}`,
      Accept: 'application/json',
    },
  }

  if (requestBody && method === 'post') {
    fetchOptions.headers['Content-Type'] = 'application/json'
    fetchOptions.body = JSON.stringify(requestBody)
  }

  if (requestBody && method === 'patch') {
    fetchOptions.headers['Content-Type'] = 'application/json'
    fetchOptions.body = JSON.stringify(requestBody)
  }

  try {
    const response = await fetch(`${config.apiRootUrl}${path}`, fetchOptions)
    if (!response.ok) throw new Error(`${response.status}: ${response.statusText}`)
    const data = await response.json()
    console.log(data)
    return data as ResponseT
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('the request was aborted.')
    } else {
      console.log(error.message)
    }
  }
}

export default placeApiRequest
