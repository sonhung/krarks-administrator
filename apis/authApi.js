const axios = require('axios')
const config = require('../config')
const url = require('../constants/router')

const { baseUrl } = config
const { loginUrl } = url

const authApi = env => {
  const login = async (req, res) => {
    const { body = {} } = req
    const url = `${baseUrl}${loginUrl}`
    try {
      const { data } = await axios.post(url, body)
      res.send({ data, status: 200 })
    } catch (err) {
      const {
        message = 'Request failed with status code 400',
        response: { status = 400, data: errData } = {},
      } = err
      res.send({ message, status, errData })
    }
  }

  return {
    login,
  }
}

module.exports = authApi
