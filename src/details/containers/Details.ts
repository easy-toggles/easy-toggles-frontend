import { connect } from 'react-redux'
import Details from '../components/Details'
import { State } from '../../store'
import { Config } from '../../types/project'
import { creators as projectsCreators } from '../../projects/projectsActions'
import { creators as detailsCreators } from '../../details/detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'
import { InputModalActions } from '../../types/modal'

const mapStateToProps = ({ details: { config } }: State): StateProps => {
  return { config }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  loadProject: (id) => dispatch(projectsCreators.changeApplication({ id })),
  addFeature: () =>
    dispatch(
      modalCreators.open({
        action: InputModalActions.AddFeature,
        content: { label: 'Add feature' }
      })
    ),
  publish: (id: number) => dispatch(detailsCreators.startPublish({ id }))
})

export interface DispatchProps {
  loadProject: Function
  addFeature: Function
  publish: Function
}

export interface StateProps {
  config: Config
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Details)
