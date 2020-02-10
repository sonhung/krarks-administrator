import React, { useContext } from 'react'
import css from 'styled-jsx/css'

import AuthContext from '../components/AuthContext'
import Logo from '../assets/images/krark-logo-header.svg'

const Header = () => {
  const { logout } = useContext(AuthContext)
  let name = ''
  if (typeof window !== 'undefined') {
    name = window.localStorage.getItem('email')
  }

  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      {name && (
        <div className="menu">
          <div className="user-name">{name}</div>
          <div className="vertical-line">|</div>
          <div className="logout" onClick={logout}>
            Thoát ra
          </div>
        </div>
      )}
      <style jsx>{styles}</style>
    </div>
  )
}

export default Header

const styles = css`
  .header {
    display: flex;
    align-items: center;
    width: 100%;
    height: 69px;
    margin: 0 84px;
    justify-content: space-between;
  }

  .menu {
    display: flex;
    font-size: 14px;
    color: #999999;
  }

  .vertical-line {
    margin: 0 5px;
  }

  .logout {
    cursor: pointer;
  }
`
