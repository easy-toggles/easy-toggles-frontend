import React from 'react'
import ReactModal from 'react-modal'
import { Field } from 'redux-form'
import { Field as FieldData } from '../../types/form'

import './formModal.less'

class FormModal extends React.Component<Props, {}> {

  componentDidMount() {
    if (process.env.NODE_ENV !== 'test') {
      ReactModal.setAppElement('#root')
    } 
  }

  private renderField({ input, field }) {
    const { type } = field
    if (type === 'text' || type === 'email' || type === 'number' || type === 'checkbox') {
      return <input {...input} type={type} />
    } else if (type === 'select') {
      const { options } = field
      return (
        <select name={field.name} onChange={input.onChange}>
          {options.map((option, index) => {
            return (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      )
    }
  }

  render() {
    const props = {
      isOpen: this.props.open,
      className: 'input-modal',
      overlayClassName: 'input-modal-overlay',
      onRequestClose: () => this.props.onClose()
    }

    return (
      <ReactModal {...props}>
        <h4>{this.props.title}</h4>
        <div className="modal-content">
          <form onSubmit={this.props.onSubmit}>
            {this.props.fields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <Field name={field.name} component={this.renderField} field={field} />
              </div>
            ))}
            <div className="action-bar">
              <button className="outline cancel-button" onClick={(e) => this.props.onClose()}>
                Cancel
              </button>
              <button className="confirm-button" type="submit">
                OK
              </button>
            </div>
          </form>
        </div>
      </ReactModal>
    )
  }
}

export interface Props {
  title: string
  fields: FieldData[]
  open: boolean
  onClose: () => void
  onSubmit: () => void
}

export default FormModal