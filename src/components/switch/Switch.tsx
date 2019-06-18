import React from 'react'

import './switch.less'

const Switch = ({ checked, onChange }: Props) => {
  const checkedProp = checked ? { checked: true } : {}
  const props = {
    role: 'switch',
    type: 'checkbox',
    onChange,
    ...checkedProp
  }
  return (
    <label className="switch">
      <input {...props} />
      <span className="slider" />
    </label>
  )
}

interface Props {
  checked: boolean,
  onChange: any
}

export default Switch
