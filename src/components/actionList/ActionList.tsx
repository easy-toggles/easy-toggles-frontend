import React from 'react'

import './actionList.less'

const Delete = ({ buttons, children }: Props) => (
  <div className="action-list">
    <button className="save-button">
      <i className="material-icons">add</i>
      <span>{buttons.add.label}</span>
    </button>
    {children}
  </div>
)

interface Props {
  buttons: {
    add: {
      label: string
    }
  },
  children?: React.ReactNode
}

export default Delete
