import { connect } from 'react-redux'
import Rule from '../components/Rule'
import { creators } from '../detailsActions'

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addCriteria: (path) => dispatch(creators.addCriteria({ path })), 
  deleteCriteria: (path) => dispatch(creators.deleteCriteria({ path })),
  updateCriteriaValues: (path, values) => dispatch(creators.updateCriteriaValues({ path, values })),
  deleteRule: (path) => dispatch(creators.deleteRule({ path }))
})

interface DispatchProps {
  addCriteria: Function,
  deleteCriteria: Function,
  deleteRule: Function,
  updateCriteriaValues: Function
}

export default connect(null, mapDispatchToProps)(Rule)
