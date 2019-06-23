import { connect } from 'react-redux'
import Feature from '../components/Feature'
import { creators } from '../detailsActions'
import { Feature as FeatureData } from '../../types/application'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onToggle: (name, data) => dispatch(creators.toggleFeature({ path: [name], data })),
  onDelete: (name) => dispatch(creators.deleteFeature({ path: [name] }))
})

export interface DispatchProps {
  onToggle: (name: string, data: FeatureData) => void
  onDelete: (name: string) => void
}

export default connect(
  null,
  mapDispatchToProps
)(Feature)
