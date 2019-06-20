import { connect } from 'react-redux'
import Rule from '../components/Rule'
import { creators } from '../detailsActions'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addCriteria: (path) => dispatch(creators.addCriteria({ path })), 
  deleteCriteria: (path) => dispatch(creators.deleteCriteria({ path })),
  deleteRule: (path) => dispatch(creators.deleteRule({ path }))
})

interface DispatchProps {
  addCriteria: Function,
  deleteCriteria: Function,
  deleteRule: Function
}

export default connect(null, mapDispatchToProps)(Rule)
