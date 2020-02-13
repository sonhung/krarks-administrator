import React, { useState } from 'react'
import css from 'styled-jsx/css'

import Layout from '../components/Layout'
import Modal from '../components/Modal'
import { MODAL_TYPE } from '../constants'

const Photo = () => {
  const [show, setShow] = useState(false)

  const deleteItem = () => {
    console.log('ok ne hihi do ngok')
  }

  return (
    <React.Fragment>
      <Layout>
        <div>Tranh chụp</div>
        <button onClick={() => setShow(true)}>show modal</button>
        <Modal
          show={show}
          close={setShow}
          type={MODAL_TYPE.EDIT}
          onDelete={deleteItem}
        />
      </Layout>
      <style jsx>{styles}</style>
    </React.Fragment>
  )
}

export default Photo

const styles = css``
