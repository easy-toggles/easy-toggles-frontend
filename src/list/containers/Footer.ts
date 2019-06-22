import { connect } from 'react-redux'
import Footer from '../components/Footer'
import { State } from '../../store'
import { creators as listCreators } from '../listActions'
import { creators as detailsCreators } from '../../details/detailsActions'
import { creators as modalCreators } from '../../modal/modalActions'
import { Application } from '../../types/application'
import { InputModalActions } from '../../types/modal'

const mapStateToProps = ({ list: { applications } }: State): StateProps => {
  return { applications }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  changeApplication: (id: number) => dispatch(listCreators.changeApplication({ id })),
  addFeature: () =>
    dispatch(
      modalCreators.open({
        action: InputModalActions.AddFeature,
        content: { label: 'Add feature' }
      })
    ),
  publish: (id: number) => dispatch(detailsCreators.startPublish({ id }))
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
