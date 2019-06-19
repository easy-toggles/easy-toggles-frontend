import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { State } from '../../store'
import { creators as listCreators } from '../listActions'
import { creators as detailsCreator } from '../../details/detailsActions'
import { Application } from '../../types/application'

const mapStateToProps = ({ list: { applications } }: State): StateProps => {
  return { applications }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  changeApplication: (id: number) => dispatch(listCreators.changeApplication({ id })),
  publish: () => dispatch(detailsCreator.startPublish())
})

interface StateProps {
  applications: Application[]
}

interface DispatchProps {
  changeApplication: Function,
  publish: Function
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
