import React from 'react'
import { Application } from '../../types/application'

import './footer.less'

class Footer extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.state = { current: null }
  }

  private onChangeApplication(event) {
    const selectedApplication = event.target.value

    if (selectedApplication) {
      this.setState({ current: selectedApplication })
      this.props.changeApplication(selectedApplication)
    }
  }

  private listApplications() {
    return this.props.applications.map((application) => (
      <option key={application.id} value={application.id}>
        {application.name}
      </option>
    ))
  }

  public render() {
    return (
      <footer>
        <div>
          <div className="application">
            <div className="form-select">
              <label htmlFor="application-select">Application</label>
              <select id="application-select" onChange={(e) => this.onChangeApplication(e)}>
                  <option></option>
                  {this.listApplications()}
                </select>
            </div>
          </div>

          <div className="action-bar">
            <button className="add-feature-button" onClick={(e) => this.props.addFeature()}>
              <i className="material-icons">add</i>
              Add feature
            </button>

            <button className="publish-button" onClick={(e) => this.props.publish(this.state.current)}>
              <i className="material-icons">publish</i>
              Publish
            </button>
          </div>
        </div>
      </footer>
    )
  }
}

interface Props {
  applications: Application[]
  changeApplication: Function
  addFeature: Function
  publish: Function
}

interface State {
  current: number
}

export default Footer
