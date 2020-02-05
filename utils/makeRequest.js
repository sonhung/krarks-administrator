import axios from 'axios'

const DEFAULT_RESULT = { code: 100, message: 'default result' }
const defaultHeader = {
  'Content-Type': 'application/json',
}

const buildHeader = headers => {
  return { ...defaultHeader, ...headers }
}

export const makeGetRequest = async (url, params = {}, headers = {}) => {
  let result = DEFAULT_RESULT
  const newHeaders = buildHeader(headers)
  try {
    const res = await axios.get(url, {
      headers: newHeaders,
      params,
    })
    result = res.data
  } catch (error) {
    console.log(error)
  }
  return result
}

export const makePostRequest = async (url, data = {}, headers = {}) => {
  let result = DEFAULT_RESULT
  const newHeaders = buildHeader(headers)
  try {
    const res = await axios.post(url, data, {
      headers: newHeaders,
    })
    result = res.data
  } catch (error) {
    console.log(error)
  }
  return result
}
