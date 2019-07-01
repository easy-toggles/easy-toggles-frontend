import { connect } from 'react-redux'
import Details from '../components/Details'
import { State } from '../../store'
import { Config } from '../../types/applications'
import * as detailsActions from '../../details/detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'

const mapStateToProps = ({ details: { config } }: State): StateProps => {
  return { config }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  loadApplication: (id) => dispatch(detailsActions.creators.loadConfig(null, { id })),
  addFeature: () =>
    dispatch(
      modalCreators.open({
        action: detailsActions.types.ADD_FEATURE,
        title: 'Add feature',
        fields:[
          { label: 'Name', name: 'name', type: 'text' }
        ]
      })
    ),
  publish: (id: number) => dispatch(detailsActions.creators.startPublish({ id }))
})

export interface DispatchProps {
  loadApplication: Function
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
