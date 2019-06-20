import React, { RefObject } from 'react'

interface Props {
  text: string
  onFocus?: Function
  onFocusOut?: Function
}

interface State {
  text: string
  isEditing: boolean
}

export default class EditableText extends React.Component<Props, State> {

  private ENTER_KEY_CODE:number = 13
  private input:RefObject<HTMLInputElement> = React.createRef()

  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      text: this.props.text || ''
    }
  }

  handleKeyUp(e) {
    if (e.keyCode === this.ENTER_KEY_CODE) {
      this.setState({ isEditing: false })
      this.props.onFocusOut(this.state.text)
    }
  }

  private handleFocus() {
    if (this.state.isEditing) {
      if (typeof this.props.onFocusOut === 'function') {
        this.props.onFocusOut(this.state.text)
      }
    } else {
      if (typeof this.props.onFocus === 'function') {
        this.props.onFocus(this.state.text)
      }
    }

    this.setState({
      isEditing: !this.state.isEditing
    })
  }

  private handleChange() {
    this.setState({
      text: this.input.current.value
    })
  }

  render() {
    if (this.state.isEditing) {
      return (
        <div>
          <input
            type="text"
            ref={this.input}
            value={this.state.text}
            onChange={e => this.handleChange()}
            onBlur={e => this.handleFocus()}
            onKeyUp={e => this.handleKeyUp(e)}
            autoFocus
          />
        </div>
      )
    }

    return (
      <div>
        <label onClick={(e) => this.handleFocus()}>
          {this.state.text}
        </label>
      </div>
    )
  }
}
