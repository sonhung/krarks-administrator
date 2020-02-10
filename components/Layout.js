import React from 'react'
import css from 'styled-jsx/css'
import PropTypes from 'prop-types'

import Header from '../components/Header'
import LeftMenu from '../components/LeftMenu'

const Layout = props => {
  return (
    <div>
      <div className="layout">
        <header className="header">
          <Header />
        </header>
        <div className="content">
          <LeftMenu />
          <div className="main-content">{props.children}</div>
        </div>
        <footer className="footer" />
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout

const styles = css`
  .header {
    height: 69px;
    background: #fff;
    display: flex;
  }

  .content {
    min-height: calc(100vh - 69px);
    display: flex;
  }

  .main-content {
    flex: 1 0 auto;
  }
`
