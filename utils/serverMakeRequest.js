const axios = require('axios')

const serverMakeGetRequest = async (res, url, params, authorization) => {
  try {
    const { data } = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
      params,
    })
    res.send({ data, status: 200 })
  } catch (err) {
    const {
      message = 'Request failed with status code 400',
      response: { status = 400, data: errData = {} } = {},
    } = err
    res.send({ message, status, errData })
  }
}

const serverMakePostRequest = async (res, url, body = {}, authorization) => {
  try {
    const { data } = await axios.post(url, body, {
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    })
    res.send({ data, status: 200 })
  } catch (err) {
    const {
      message = 'Request failed with status code 400',
      response: { status = 400, data: errData } = {},
    } = err
    res.send({ message, status, errData })
  }
}

const serverMakePutRequest = async (res, url, body, authorization) => {
  try {
    const { data } = await axios({
      method: 'put',
      url,
      data: body,
      headers: {
        Authorization: `Bearer ${authorization}`,
      },
    })
    res.send({ data, status: 200 })
  } catch (err) {
    const {
      message = 'Request failed with status code 400',
      response: { status = 400, data: errData } = {},
    } = err
    res.send({ message, status, errData })
  }
}

module.exports = {
  serverMakeGetRequest,
  serverMakePostRequest,
  serverMakePutRequest,
}
