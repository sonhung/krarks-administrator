import React, { useEffect } from 'react'
import { node } from 'prop-types'
import Router from 'next/router'

import { makePostRequest } from '../utils/makeRequest'
import { loginUrl } from '../constants/router'
import { LOGIN_MESSAGE } from '../constants'

const initialState = {
  roles: [],
  isLogin: false,
}

const AuthContext = React.createContext(initialState)

function AuthProvider({ children }) {
  const login = async (email, password, remember, cbFailed) => {
    const { status, data: { token } = {} } = await makePostRequest(loginUrl, {
      email,
      password,
    })

    if (status === 200) {
      // store login when user choose remember
      if (remember) {
        window.localStorage.setItem('token', token)
      }
      window.localStorage.setItem('email', email)
      setState({ ...state, isLogin: true })
      Router.push('/')
      return
    }
    cbFailed(LOGIN_MESSAGE[status])
  }

  const logout = () => {
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('email')
    setState({ ...state, isLogin: false })
    Router.push('/login')
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
      if (token || isLogin) setState({ ...state, isLogin: true })
      else {
        Router.push('/login')
      }
    }
  }, [])

  return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: node.isRequired,
}

export { AuthProvider }
export default AuthContext
