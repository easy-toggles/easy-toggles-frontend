import { connect } from 'react-redux'
import Details from '../components/Details'
import { State } from '../../store'
import { Config } from '../../types/project'
import * as detailsActions from '../../details/detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'

const mapStateToProps = ({ details: { config } }: State): StateProps => {
  return { config }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  loadProject: (id) => dispatch(detailsActions.creators.loadConfig(null, { id })),
  addFeature: () =>
    dispatch(
      modalCreators.open({
        action: detailsActions.types.ADD_FEATURE,
        content: { label: 'Add feature' }
      })
    ),
  publish: (id: number) => dispatch(detailsActions.creators.startPublish({ id }))
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
