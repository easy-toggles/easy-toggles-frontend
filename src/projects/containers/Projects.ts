import { connect } from 'react-redux'
import Projects from '../components/Projects'
import { State } from '../../store'
import { Project } from '../../types/project'

const mapStateToProps = ({ projects: { data } }: State): StateProps => {
  return { projects: data }
}

interface StateProps {
  projects: Project[]
}

export default connect(
  mapStateToProps
)(Projects)
