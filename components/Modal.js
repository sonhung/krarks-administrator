import React, { useState } from 'react'
import css from 'styled-jsx/css'
import PropTypes from 'prop-types'
import { Modal, Input } from 'antd'

import { MODAL_TYPE } from '../constants'

const MODAL_TITLE = {
  INFO: 'Tải lên thành công',
  DELETE: 'Bạn đang dự định xóa một sản phẩm',
  EDIT: 'Sửa nội dung của sản phẩm',
}

const MODAL_CONTENT = {
  INFO: 'Mẫu đã tải lên thành công',
  DELETE: 'Bạn có muốn xóa không',
}

const ModalCustom = props => {
  const {
    type = MODAL_TYPE.INFO,
    show = false,
    close = () => null,
    onDelete = () => null,
    onUpdate = () => null,
    title: propTitle = '',
    keys: propKeys = '',
  } = props

  const width = type === MODAL_TYPE.EDIT ? 661 : 408
  const [title, setTitle] = useState(propTitle)
  const [keys, setKeys] = useState(propKeys)

  const handleCancel = () => {
    close(false)
  }

  return (
    <div>
      <Modal
        title={MODAL_TITLE[props.type]}
        visible={show}
        onCancel={handleCancel}
        closable={false}
        footer={null}
        width={width}
      >
        <div className="content">
          {type === MODAL_TYPE.EDIT && (
            <div>
              <div className="group">
                <label>Tiêu đề sản phẩm</label>
                <Input
                  placeholder="Tiêu đề sản phẩm"
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
              </div>
              <div className="group">
                <label>
                  Từ khóa của sản phẩm (mỗi từ khóa cách nhau bởi dấu phẩy)
                </label>
                <Input
                  placeholder="Từ khóa của sản phẩm"
                  value={keys}
                  onChange={e => setKeys(e.target.value)}
                />
              </div>
            </div>
          )}
          {type !== MODAL_TYPE.EDIT && <div>{MODAL_CONTENT[type]}</div>}
        </div>
        <div className="action">
          {type === MODAL_TYPE.INFO && (
            <button
              className="orange-button krark-button"
              onClick={handleCancel}
            >
              QUAY VỀ
            </button>
          )}
          {type === MODAL_TYPE.DELETE && (
            <React.Fragment>
              <button
                className="gray-button krark-button"
                onClick={handleCancel}
              >
                KHÔNG
              </button>
              <button className="orange-button krark-button" onClick={onDelete}>
                CÓ
              </button>
            </React.Fragment>
          )}
          {type === MODAL_TYPE.EDIT && (
            <React.Fragment>
              <button
                className="orange-button krark-button"
                onClick={() => onUpdate(title, keys)}
              >
                LƯU
              </button>
              <button
                className="gray-button krark-button"
                onClick={handleCancel}
              >
                HỦY
              </button>
            </React.Fragment>
          )}
        </div>
      </Modal>
      <style jsx>{styles}</style>
    </div>
  )
}

ModalCustom.propTypes = {
  type: PropTypes.string,
  show: PropTypes.bool,
  close: PropTypes.func,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  keys: PropTypes.string,
  title: PropTypes.string,
}

export default ModalCustom

const styles = css`
  .content {
    font-size: 14px;
    color: #333333;
    padding: 10px 0 20px;
  }

  .group {
    margin-top: 20px;
  }

  .action {
    text-align: center;
  }

  .action :global(button) {
    min-width: 90px;
    cursor: pointer;
  }
`
