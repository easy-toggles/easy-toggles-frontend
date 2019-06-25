import React from 'react'
import { Link } from 'react-router-dom'
import { Project as ProjectData } from '../../types/project'
import { StateProps, DispatchProps } from '../containers/Projects'

import './projects.less'


const listProjects = (projects: ProjectData[]) => {
  return projects.map((project) => (
    <li key={project.id} className="list-item">
      <Link to={`/projects/${project.id}`}>{project.name}</Link>
    </li>
  ))
}

const Projects = ({ projects, addProject }: Props) => (
  <section className="projects">
    <div className="action-bar">
      <div>
        <button className="add-project-button" onClick={e => addProject() }>
          <i className="material-icons">add</i>
          Add project
        </button>
      </div>
    </div>
    <ul>{listProjects(projects)}</ul>
  </section>
)

type Props = StateProps & DispatchProps

export default Projects
