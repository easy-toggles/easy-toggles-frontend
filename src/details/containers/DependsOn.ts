import { append, reduce, pipe, filter, includes } from 'ramda'
import { connect } from 'react-redux'
import DependsOn from '../components/DependsOn'
import { creators as modalCreators } from '../../modal/modalActions'
import * as detailsActions from '../../details/detailsActions'
import { Option } from '../../types/form'
import { State } from '../../store'

const buildOptions = (featureName: string, allFeatures: string[], featuresToIgnore: string[]): Option[] => {
  const emptyItem = { value: '', label: '' }

  const ignoreFeatures = append(featureName, featuresToIgnore)
  const getOptions = (acc: Option[], feature: string) => append({ value: feature, label: feature }, acc)
  const includesFeature = (feature: string) => !includes(feature, ignoreFeatures)

  const options = pipe(
    filter(includesFeature),
    reduce(getOptions, [emptyItem])
  )(allFeatures)

  return options
}

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
    )
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps, ownProps: OwnProps): MergeProps => ({
  ...ownProps,
  addDependency: dispatchProps.addDependency(stateProps.options)
})

interface StateProps {
  options: Option[]
}

interface DispatchProps {
  addDependency: (options: Option[]) => () => void
}

export interface OwnProps {
  features: string[]
}

export interface MergeProps {
  addDependency: () => void
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(DependsOn)
