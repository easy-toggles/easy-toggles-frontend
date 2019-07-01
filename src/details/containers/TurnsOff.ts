import { connect } from 'react-redux'
import TurnsOff, { Props } from '../components/TurnsOff'
import { creators as modalCreators } from '../../modal/modalActions'
import * as detailsActions from '../../details/detailsActions'
import { Option } from '../../types/form'
import { State } from '../../store'
import { buildOptions } from '../../libs/buildOptions'

const mapStateToProps = ({ details }: State, { features }: OwnProps): StateProps => {
  return {
    options: buildOptions(details.current, Object.keys(details.config), features)
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addFeatureToTurnsOff: (options) => () =>
    dispatch(
      modalCreators.open({
        action: detailsActions.types.ADD_FEATURE_TO_TURNS_OFF,
        title: 'Add feature to turns off',
        fields: [{ label: 'Name', name: 'name', type: 'select', options }]
      })
    ),
  deleteFeatureToTurnsOff: (feature: string) => dispatch(detailsActions.creators.deleteFeatureToTurnsOff({ name: feature }))
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): Props => ({
  ...ownProps,
  addFeatureToTurnsOff: dispatchProps.addFeatureToTurnsOff(stateProps.options),
  deleteFeatureToTurnsOff: dispatchProps.deleteFeatureToTurnsOff
})

interface StateProps {
  options: Option[]
}

interface DispatchProps {
  addFeatureToTurnsOff: (options: Option[]) => () => void
  deleteFeatureToTurnsOff: (feature: string) => void
}

interface OwnProps {
  features: string[]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TurnsOff)
