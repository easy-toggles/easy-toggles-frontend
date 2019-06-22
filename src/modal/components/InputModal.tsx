import React, { RefObject } from 'react'
import ReactModal from 'react-modal'

import './inputModal.less'

if (document && document.getElementById('#root')) {
  ReactModal.setAppElement('#root')
}

const InputModal = ({ label, value, open, onClose, onConfirm }: Props) => {

  const inputRef: RefObject<HTMLInputElement> = React.createRef()

  const props = {
    isOpen: open,
    className: 'input-modal',
    overlayClassName: 'input-modal-overlay',
    onRequestClose: () => onClose()
  }

  return (
    <ReactModal {...props}>
      <label htmlFor="modal-input">{label}</label>
      <div className="modal-content">
        <input ref={inputRef} name="modal-input" type="text" defaultValue={value} autoFocus />
        <div className="action-bar">
          <button className="outline cancel-button" onClick={(e) => onClose()}>
            Cancel
          </button>
          <button className="confirm-button" onClick={(e) => onConfirm(inputRef.current.value)}>OK</button>
        </div>
      </div>
    </ReactModal>
  )
}

export interface Props {
  label: string, 
  value: string, 
  open: boolean,
  onClose: () => void
  onConfirm: (value: string) => void
}

export default InputModal
