import { append, reduce, pipe, filter, equals } from 'ramda'
import { connect } from 'react-redux'
import DependsOn from '../components/DependsOn'
import { creators as modalCreators } from '../../modal/modalActions'
import * as detailsActions from '../../details/detailsActions'
import { Option } from '../../types/form'
import { State } from '../../store'

const getOptions = (acc: Option[], feature: string) => {
  return append({ value: feature, label: feature }, acc)
}

const mapStateToProps = ({ details }: State): StateProps => {
  const emptyValues = { value: '', label: '' }
  const features = Object.keys(details.config)
  const options = pipe(
    filter((item: string) => item !== details.current),
    reduce(getOptions, [emptyValues])
  )(features)
  return { options }
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
