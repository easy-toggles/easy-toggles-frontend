import React from 'react'
import { isEmpty } from 'ramda'
import Feature from '../containers/Feature'
import Empty from '../../components/empty/Empty'
import { DispatchProps, StateProps } from '../containers/Details'

import '../styles/features.less'

class Details extends React.Component<Props, {}> {
  componentDidMount() {
    this.props.loadProject(this.props.match.params.id)
  }

  private renderFeatures() {
    return (
      <ul className="features-list">
        {Object.keys(this.props.config).map((featureName) => (
          <li key={featureName}>
            <Feature name={featureName} feature={this.props.config[featureName]} />
          </li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <section className="features">
        {isEmpty(this.props.config) ? <Empty /> : this.renderFeatures()}

        <div className="action-bar">
          <div>
            <button className="add-feature-button" onClick={(e) => this.props.addFeature()}>
              <i className="material-icons">add</i>
              Add feature
            </button>

            <button className="publish-button" onClick={(e) => this.props.publish(this.props.match.params.id)}>
              <i className="material-icons">publish</i>
              Publish
            </button>
          </div>
        </div>
      </section>
    )
  }
}
interface Props extends DispatchProps, StateProps {
  match: any
}

export default Details
