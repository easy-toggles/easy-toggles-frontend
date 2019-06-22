import * as React from 'react'
import Details from './details/containers/Details'
import Footer from './list/containers/Footer'
import InputModal from './modal/containers/InputModal'

import './app.less'
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <header>
          <h1>Easy Toggles</h1>
        </header>
        <Details />
        <Footer />
        <InputModal />
      </div>
    )
  }
}

export default App
