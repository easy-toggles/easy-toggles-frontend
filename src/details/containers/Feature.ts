import { connect } from 'react-redux'
import Feature from '../components/Feature'
import * as detailsActions from '../detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'
import { Feature as FeatureData } from '../../types/project'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onToggle: (name, data) => dispatch(detailsActions.creators.toggleFeature({ path: [name], data })),
  onDelete: (name) => dispatch(detailsActions.creators.deleteFeature({ path: [name] })),
  onEdit: (name) =>
    dispatch(
      modalCreators.open({
        content: {
          label: 'Edit feature',
          value: name
        },
        action: detailsActions.types.RENAME_FEATURE
      })
    )
})

export interface DispatchProps {
  onToggle: (name: string, data: FeatureData) => void
  onDelete: (name: string) => void
  onEdit: (name: string) => void
}

export default connect(
  null,
  mapDispatchToProps
)(Feature)
