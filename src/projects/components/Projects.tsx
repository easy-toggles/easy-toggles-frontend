import React from 'react'
import { Link } from 'react-router-dom'

import './projects.less'

const listProjects = (projects) => {
  return projects.map((project) => (
    <li key={project.id} className="list-item">
      <Link to={`/projects/${project.id}`}>{project.name}</Link>
    </li>
  ))
}

const Projects = ({ projects }) => (
  <section className="projects">
    <div className="action-bar">
      <div>
        <button className="add-project-button">
          <i className="material-icons">add</i>
          Add project
        </button>
      </div>
    </div>
    <ul>{listProjects(projects)}</ul>
  </section>
)

export default Projects
