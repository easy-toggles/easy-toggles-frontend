import { connect } from 'react-redux'
import Feature from '../components/Feature'
import { creators } from '../detailsActions'
import { Feature as FeatureData } from '../../types/application'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onChangeFeatureToggle: (name: string, data: FeatureData) => {
    dispatch(creators.changeFeature({ name, data }))
  }
})

interface DispatchProps {
  onChangeFeatureToggle: Function
}

export default connect(null, mapDispatchToProps)(Feature)
