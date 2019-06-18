import React from 'react'
import Feature from '../containers/Feature'
import { Config as ConfigData } from '../../types/application'

const listFeatures = (config: ConfigData) => {
  return Object.keys(config).map((featureName) => (
    <li key={featureName}>
      <Feature name={featureName} feature={config[featureName]} />
    </li>
  ))
}

class Details extends React.Component<Props, {}> {
  public componentWillMount() {
    this.props.loadConfig()
  }

  public render() {
    return (
      <React.Fragment>
        <section>
          <ul className="features-list">{listFeatures(this.props.config)}</ul>
        </section>

        <footer>
          <div>
            <div className="application">
              <label className="form-select">
                Application
                <select>
                  <option>shooping</option>
                </select>
              </label>

              <label className="form-select">
                Environment
                <select>
                  <option>beta</option>
                </select>
              </label>

            </div>

            <button className="add-feature">
              <i className="material-icons">add</i>
              Add feature
            </button>

            <button className="publish-button" onClick={(e) => this.props.publish()}>
              <i className="material-icons">publish</i>
              Publish
            </button>
          </div>
        </footer>
      </React.Fragment>
    )
  }
}

interface Props {
  config: ConfigData
  publish: Function
  loadConfig: Function
}

export default Details
