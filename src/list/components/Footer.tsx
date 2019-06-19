import React from 'react'
import { Application } from '../../types/application'

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

  private onPublishClick(event) {
    this.props.publish(this.state.current)
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
            <label className="form-select">
              Application
              <select onChange={e => this.onChangeApplication(e)}>
                <option></option>
                {this.listApplications()}
              </select>
            </label>
          </div>

          <button className="add-feature">
            <i className="material-icons">add</i>
            Add feature
          </button>

          <button className="publish-button" onClick={e => this.onPublishClick(e)}>
            <i className="material-icons">publish</i>
            Publish
          </button>
        </div>
      </footer>
    )
  }
}

interface Props {
  applications: Application[]
  changeApplication: Function,
  publish: Function
}

interface State {
  current: number
}

export default Footer
