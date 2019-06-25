import { connect } from 'react-redux'
import Projects from '../components/Projects'
import { State } from '../../store'
import { Project } from '../../types/project'
import { creators as modalCreators } from '../../modal/modalActions'
import { types as projectsTypes } from '../../projects/projectsActions'

const mapStateToProps = ({ projects: { data } }: State): StateProps => {
  return { projects: data }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addProject: () =>
    dispatch(
      modalCreators.open({
        action: projectsTypes.START_ADD,
        content: { label: 'Add project' }
      })
    )
})

export interface DispatchProps {
  addProject: () => void
}

export interface StateProps {
  projects: Project[]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects)
