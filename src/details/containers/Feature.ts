import { connect } from 'react-redux'
import Feature from '../components/Feature'
import * as detailsActions from '../detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'
import { Feature as FeatureData } from '../../types/project'
import { State } from '../../store'

const mapStateToProps = ({ details }: State, ownProps: OwnProps): StateProps => ({
  opened: details.current === ownProps.name
})

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onToggle: (name, data) => dispatch(detailsActions.creators.toggleFeature({ path: [name], data })),
  onDelete: (name) => dispatch(detailsActions.creators.deleteFeature({ path: [name] })),
  onChange: (name) => dispatch(detailsActions.creators.changeFeature({ name })),
  onEdit: (name) =>
    dispatch(
      modalCreators.open({
        action: detailsActions.types.RENAME_FEATURE,
        title: 'Edit feature',
        fields: [{ label: 'Name', name: 'name', type: 'text', value: name }]
      })
    )
})

export interface StateProps {
  opened: boolean
}

export interface DispatchProps {
  onToggle: (name: string, data: FeatureData) => void
  onDelete: (name: string) => void
  onEdit: (name: string) => void,
  onChange: (name:string) => void
}

export interface OwnProps {
  name: string
  feature: FeatureData
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feature)
