import React, { RefObject } from 'react'
import ReactModal from 'react-modal'
import Autocomplete from 'react-autocomplete'

import './inputModal.less'
import { render } from 'enzyme'

if (document && document.getElementById('#root')) {
  ReactModal.setAppElement('#root')
}

class InputModal extends React.Component<Props, State> {
  private inputRef: RefObject<Autocomplete> = React.createRef()

  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ value: nextProps.value })
  }

  render() {
    const props = {
      isOpen: this.props.open,
      className: 'input-modal',
      overlayClassName: 'input-modal-overlay',
      onRequestClose: () => this.props.onClose()
    }

    const menuStyle = {
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
      maxHeight: '50%'
    }

    const inputProps = {
      autoFocus: true
    }

    return (
      <ReactModal {...props}>
        <label htmlFor="modal-input">{this.props.label}</label>
        <div className="modal-content">
          <Autocomplete
            ref={this.inputRef}
            items={this.props.options || []}
            getItemValue={(item) => item.label}
            value={this.state.value}
            onChange={(e) => this.setState({ value: e.target.value })}
            onSelect={(value) => this.setState({ value })}
            menuStyle= {menuStyle}
            inputProps={inputProps}
            renderItem={(item, highlighted) => (
              <div key={item.id} className={`autocomplete-input-option ${highlighted && 'highlighted'}`}>
                {item.label}
              </div>
            )}
          />

          <div className="action-bar">
            <button className="outline cancel-button" onClick={(e) => this.props.onClose()}>
              Cancel
            </button>
            <button className="confirm-button" onClick={(e) => this.props.onConfirm(this.state.value)}>
              OK
            </button>
          </div>
        </div>
      </ReactModal>
    )
  }
}

interface State {
  value: string
}

export interface Props {
  label: string
  value: string
  open: boolean
  options?: string[]
  onClose: () => void
  onConfirm: (value: string) => void
}

export default InputModal
