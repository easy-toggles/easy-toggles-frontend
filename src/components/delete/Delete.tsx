

import React from 'react'

import './delete.less'

const Delete = ({ onClick }: Props) => (
  <button className="delete" onClick={e => onClick()}>
    <i className="material-icons">delete</i>
  </button>
)

interface Props {
  onClick: Function
}

export default Delete
