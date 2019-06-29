import * as React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import FormModal from './modal/containers/FormModal'
import Projects from './projects/containers/Projects'
import Details from './details/containers/Details'

import './app.less'
class App extends React.Component<{}, {}> {
  public render() {
    return (
      <HashRouter>
        <header>
          <h1>Easy Toggles</h1>
        </header>

        <Route exact path="/" component={Projects} />
        <Route exact path="/projects/:id" component={Details} />

        <FormModal />
      </HashRouter>
    )
  }
}

export default App
