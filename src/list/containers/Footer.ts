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
  addFeature: () => dispatch(detailsCreator.addFeature()),
  publish: (id: number) => dispatch(detailsCreator.startPublish({ id }))
})

interface StateProps {
  applications: Application[]
}

interface DispatchProps {
  changeApplication: Function
  addFeature: Function
  publish: Function
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)
