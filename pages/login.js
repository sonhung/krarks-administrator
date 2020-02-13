import React, { useState, useContext } from 'react'
import css from 'styled-jsx/css'
import { Input, Checkbox } from 'antd'
import Router from 'next/router'

import Logo from '../assets/images/krark-logo.svg'
import AuthContext from '../components/AuthContext'

const Login = () => {
  const { isLogin, login } = useContext(AuthContext)

  // check is login before
  if (isLogin) {
    Router.push('/')
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (type, value) => {
    setError(false)
    if (type === 'username') {
      setUsername(value)
      return
    }

    setPassword(value)
  }

  const submitLogin = e => {
    login(username, password, remember, error => {
      setError(error)
    })
    e.preventDefault()
  }

  return (
    <div className="login">
      <form className="login-form">
        <div className="logo">
          <img src={Logo} />
        </div>
        <div className="title">TRUNG TÂM QUẢN LÝ</div>
        <div>
          <Input
            placeholder="Tên đăng nhập"
            value={username}
            onChange={e => handleChange('username', e.target.value)}
          />
        </div>
        <div className="input-password">
          <Input
            value={password}
            placeholder="Mật khẩu"
            type="password"
            onChange={e => handleChange('password', e.target.value)}
          />
        </div>
        <div className="error">{error}</div>
        <Checkbox onChange={e => setRemember(e.target.checked)}>
          Ghi nhớ
        </Checkbox>
        <button
          className="orange-button krark-button login-btn"
          onClick={e => submitLogin(e)}
        >
          ĐĂNG NHẬP
        </button>
      </form>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Login

const styles = css`
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .login-form {
    width: 255px;
  }

  .logo {
    text-align: center;
    margin-bottom: 40px;
  }

  .title {
    font-size: 20px;
    text-align: center;
    color: #333333;
    margin-bottom: 57px;
  }

  .input-password {
    margin-top: 9px;
  }

  .input :global(input) {
    background-color: #f8f8f8;
    border-radius: 2px;
  }

  .error {
    font-size: 12px;
    height: 26px;
    color: #ff4d4f;
    padding-top: 5px;
  }

  .login-btn {
    margin-top: 15px;
    width: 100%;
  }
`
