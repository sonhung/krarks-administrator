import React from 'react'
import css from 'styled-jsx/css'
import Layout from '../components/Layout'

const Sample = () => {
  return (
    <React.Fragment>
      <Layout>
        <div>Tranh mẫu</div>
      </Layout>
      <style jsx>{styles}</style>
    </React.Fragment>
  )
}

export default Sample

const styles = css``
