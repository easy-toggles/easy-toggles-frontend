import { connect } from 'react-redux'
import Rules from '../components/Rules'
import { creators } from '../detailsActions'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addRule: (path) => dispatch(creators.addRule({ path }))
})

interface DispatchProps {
  addRule: Function
}

export default connect(
  null,
  mapDispatchToProps
)(Rules)
