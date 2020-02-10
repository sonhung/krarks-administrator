import React from 'react'
import css from 'styled-jsx/css'
import Layout from '../components/Layout'

const Text = () => {
  return (
    <React.Fragment>
      <Layout>
        <div>Nội dung chữ</div>
      </Layout>
      <style jsx>{styles}</style>
    </React.Fragment>
  )
}

export default Text

const styles = css``
