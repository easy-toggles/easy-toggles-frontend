import * as React from 'react'
import Details from './details/containers/Details'

import './app.less'
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <header>
          <h1>Easy Toggles</h1>
        </header>

        <Details />
      </div>
    )
  }
}

export default App
