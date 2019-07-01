import { connect } from 'react-redux'
import DependsOn, { Props } from '../components/DependsOn'
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
  addDependency: (options) => () =>
    dispatch(
      modalCreators.open({
        action: detailsActions.types.ADD_DEPENDENCY,
        title: 'Add dependency',
        fields: [{ label: 'Name', name: 'name', type: 'select', options }]
      })
    ),
  deleteDependency: (dependency: string) => dispatch(detailsActions.creators.deleteDependency({name: dependency }))
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): Props => ({
  ...ownProps,
  addDependency: dispatchProps.addDependency(stateProps.options),
  deleteDependency: dispatchProps.deleteDependency
})

interface StateProps {
  options: Option[]
}

interface DispatchProps {
  addDependency: (options: Option[]) => () => void
  deleteDependency: (dependency: string) => void
}

export interface OwnProps {
  features: string[]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DependsOn)
