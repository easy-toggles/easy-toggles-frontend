import React, {RefObject} from 'react'
import { Application } from '../../types/application'

class Footer extends React.Component<Props, State> {
  private onChangeApplication(event) {
    const selectedApplication = event.target.value
    if (selectedApplication) {
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

          <button className="publish-button" onClick={e => this.props.publish()}>
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
  application: string
}

export default Footer
