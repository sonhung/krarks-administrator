const authApi = env => {
  const login = async (req, res) => {
    res.send({ status: 200 })
  }

  return {
    login,
  }
}

module.exports = authApi
