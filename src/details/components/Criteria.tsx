import React from 'react'

import '../styles/criteria.less'

interface Props {
  value: string
}

const Rule = ({ value }: Props) => (
  <div className="criteria">
    <span>{value}</span>
    <i className="material-icons">clear</i>
  </div>
)

export default Rule
