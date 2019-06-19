import { connect } from 'react-redux'
import Details from '../components/Details'
import { State } from '../../store'
import { creators } from '../detailsActions'
import { Config } from '../../types/application'

const mapStateToProps = ({ details: { config } }: State): StateProps => {
  return { config }
}

interface StateProps {
  config: Config
}

export default connect(mapStateToProps)(Details)
