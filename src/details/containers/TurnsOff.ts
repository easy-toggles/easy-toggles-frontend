import { connect } from 'react-redux'
import TurnsOff from '../components/TurnsOff'
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
    )
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): MergeProps => ({
  ...ownProps,
  addFeatureToTurnsOff: dispatchProps.addFeatureToTurnsOff(stateProps.options)
})

interface StateProps {
  options: Option[]
}

interface DispatchProps {
  addFeatureToTurnsOff: (options: Option[]) => () => void
}

export interface OwnProps {
  features: string[]
}

export interface MergeProps extends OwnProps {
  addFeatureToTurnsOff: () => void
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(TurnsOff)
