import React, { useState, useEffect } from 'react'
import css from 'styled-jsx/css'
import Router from 'next/router'
import get from 'lodash/get'
import findIndex from 'lodash/findIndex'

import { LEFT_MENU } from '../constants'

const LeftMenu = () => {
  const [toggle, setToggle] = useState(true)
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    const pathname = get(Router, 'router.pathname', '')
    const index = findIndex(LEFT_MENU, item => item.route === pathname)
    setActiveIndex(index)
  })

  const handleClick = item => {
    Router.push(item.route)
  }

  return (
    <div className="left-menu">
      <div className="parent-item item-text" onClick={() => setToggle(!toggle)}>
        <span>QUẢN TRỊ</span>
        <span className={`${toggle ? 'expand' : 'collapse-menu'}`} />
      </div>
      {toggle && (
        <div>
          {LEFT_MENU.map((item, index) => (
            <div
              key={index}
              className={`${
                index === activeIndex ? 'active' : ''
              } childs-item item-text`}
              onClick={() => handleClick(item)}
            >
              {item.title}
              <svg
                className={`${
                  index === activeIndex ? 'icon-active' : 'icon-unactive'
                } icon`}
                data-v-211b7d59=""
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="7"
                viewBox="0 0 10 7"
                fill="none"
              >
                <path
                  data-v-211b7d59=""
                  d="M1 3L4 6L9 1"
                  stroke="white"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ))}
        </div>
      )}
      <style jsx>{styles}</style>
    </div>
  )
}

export default LeftMenu

const styles = css`
  .left-menu {
    width: 215px;
    background: #787878;
  }

  .parent-item {
    background: #676970;
    color: #fff;
    font-weight: bold;
    padding: 8px 25px 0;
    margin-bottom: 7px;
  }

  .childs-item {
    position: relative;
    color: #c4c4c4;
    padding: 8px 46px 0;
  }

  .active {
    color: #fff;
  }

  .icon-unactive {
    display: none;
  }

  .item-text {
    text-align: right;
    height: 38px;
    font-size: 14px;
    cursor: pointer;
  }

  .icon {
    position: absolute;
    top: 15px;
    right: 20px;
  }

  .icon-unactive {
    display: none;
  }

  .childs-item:hover {
    background: #707070;
    color: #fff;
  }

  .childs-item:hover .icon-unactive {
    display: block;
  }

  .collapse-menu::after {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    transform: rotate(-45deg) translateY(-3.5px);
    margin-left: 15px;
  }

  .expand::after {
    content: '';
    display: inline-block;
    width: 7px;
    height: 7px;
    border: solid #ffffff;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg) translateY(-3.5px);
    transform: rotate(45deg) translateY(-3.5px);
    margin-left: 15px;
  }
`
