import React from 'react'
import { Link } from 'react-router-dom'
import { Application as ApplicationData } from '../../types/applications'
import { StateProps, DispatchProps } from '../containers/Applications'

import './applications.less'


const listApplications = (applications: ApplicationData[]) => {
  return applications.map((application) => (
    <li key={application.id} className="list-item">
      <Link to={`/applications/${application.id}`}>{application.name}</Link>
    </li>
  ))
}

const Application = ({ applications, addApplication }: Props) => (
  <section className="applications">
    <div className="action-bar">
      <div>
        <button className="add-application-button" onClick={e => addApplication() }>
          <i className="material-icons">add</i>
          Add application
        </button>
      </div>
    </div>
    <ul>{listApplications(applications)}</ul>
  </section>
)

type Props = StateProps & DispatchProps

export default Application
