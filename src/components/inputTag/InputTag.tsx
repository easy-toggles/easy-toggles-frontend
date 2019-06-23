import React from 'react'

import './inputTag.less'

interface State {
  tags: string[]
  value: string
}

interface Props {
  tags: string[]
  onChange: Function
}

const ENTER_KEY = 13
const COMMA_KEY = 188
const BACKSPACE_KEY = 8

class InputTag extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { tags: props.tags, value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleKeyUp(e) {
    const key = e.keyCode

    if (key === ENTER_KEY || key === COMMA_KEY) {
      this.addTag()
    }
  }

  handleKeyDown(e) {
    const key = e.keyCode
    if (key === BACKSPACE_KEY && !this.state.value) {
      this.editPrevTag()
    }
  }

  removeTag(tag) {
    const tags = this.state.tags.filter((item) => item !== tag)
    this.setState({ tags })
    this.props.onChange(tags)
  }

  addTag() {
    const { tags, value } = this.state
    let tag = value.trim()

    tag = tag.replace(/,/g, '')

    if (!tag) {
      return
    }

    const newTags = [...tags, tag]
    this.setState({ tags: newTags, value: '' })
    this.props.onChange(newTags)
  }

  editPrevTag() {
    let { tags } = this.state

    const tag = tags.pop()

    this.setState({ tags, value: tag })
    this.props.onChange(tags)
  }

  render() {
    const { value, tags } = this.state
    return (
      <div className="form">
        <div className="tags">
          <ul>
            {tags.map((tag, i) => (
              <li key={tag + i} className="tag">
                <span>{tag}</span>
                <i className="material-icons" onClick={(e) => this.removeTag(tag)}>
                  clear
                </i>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add tag..."
            value={value}
            onChange={this.handleChange}
            ref="tag"
            className="tag-input"
            onKeyUp={this.handleKeyUp}
            onKeyDown={this.handleKeyDown}
          />
        </div>
      </div>
    )
  }
}

export default InputTag
