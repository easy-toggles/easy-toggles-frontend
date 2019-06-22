import React from 'react'

const IconButton = ({ onClick, type }: Props) => (
  <button className="icon-button" onClick={(e) => onClick()}>
    <i className="material-icons">{type}</i>
  </button>
)

interface Props {
  onClick?: Function,
  type: string
}

export enum IconButtonTypes {
  Delete = 'delete',
  Edit = 'edit'
}

export default IconButton
