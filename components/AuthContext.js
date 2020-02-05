import React, { useEffect } from 'react'
import { node } from 'prop-types'

import { makePostRequest } from '../utils/makeRequest'

const initialState = {
  roles: [],
  isLogin: false,
}

const AuthContext = React.createContext(initialState)

function AuthProvider({ children }) {
  const login = async (username, password) => {
    const { status } = await makePostRequest('loginUrl', { username, password })

    if (status === 200) {
      setState({ ...state, isLogin: true })
    }
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    setState({ ...state, isLogin: false })
  }

  const [state, setState] = React.useState({
    ...initialState,
    login,
    logout,
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const token = window.localStorage.getItem('token')
      const { isLogin } = state
      if (token && !isLogin) setState({ ...state, isLogin: true })
    }
  })

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: node.isRequired,
}

export { AuthProvider }
export default AuthContext
