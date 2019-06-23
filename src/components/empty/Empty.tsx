import React from 'react'

import './empty.less'

const Empty = () => (
  <div className="empty">
    <span dangerouslySetInnerHTML={{ __html: require('./empty.svg') }}></span>
    <p>Ops! There's nothing here.</p>
  </div>
)

export default Empty
