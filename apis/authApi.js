const authApi = env => {
  const login = async (req, res) => {
    const { body: { username = '', password } = {} } = req
    if (username === password) {
      res.send({ status: 200, token: 'ferfgerwetqwtqergtergergergegergerg' })
    }
    res.send({ status: 401 })
  }

  return {
    login,
  }
}

module.exports = authApi
