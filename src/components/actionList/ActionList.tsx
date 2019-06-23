import React from 'react'

import './actionList.less'

const listButtons = (buttons) => {
  return Object.keys(buttons).map((key) => {
    const button: Button = buttons[key]
    return (
      <button key={key} className="outline" onClick={(e) => button.onClick()}>
        <i className="material-icons">{button.icon}</i>
        <span>{button.label}</span>
      </button>
    )
  })
}

const ActionList = ({ buttons, children, className }: Props) => (
  <div className={`action-list ${className}`}>
    <div className="action-bar">{listButtons(buttons)}</div>
    {children}
  </div>
)

interface Button {
  icon: string
  label: string
  onClick: Function
}
interface Props {
  buttons: {
    [key: string]: Button
  }
  children?: React.ReactNode
  className?: string
}

export default ActionList
