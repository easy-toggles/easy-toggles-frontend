import { connect } from 'react-redux'
import Feature from '../components/Feature'
import { creators as detailsCreators } from '../detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'
import { Feature as FeatureData } from '../../types/application'
import { InputModalActions } from '../../types/modal'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onToggle: (name, data) => dispatch(detailsCreators.toggleFeature({ path: [name], data })),
  onDelete: (name) => dispatch(detailsCreators.deleteFeature({ path: [name] })),
  onEdit: (name) =>
    dispatch(
      modalCreators.open({
        content: {
          label: 'Edit feature',
          value: name
        },
        action: InputModalActions.EditFeature
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
