import React from 'react'

import './actionList.less'

const ActionList = ({ buttons, children }: Props) => (
  <div className="action-list">
    <button className="add-button outline" onClick={(e) => buttons.add.onClick()}>
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
      onClick: Function
    }
  }
  children?: React.ReactNode
}

export default ActionList
