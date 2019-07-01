import { connect } from 'react-redux'
import Applications from '../components/Applications'
import { State } from '../../store'
import { Application } from '../../types/applications'
import { creators as modalCreators } from '../../modal/modalActions'
import { types as applicationsTypes } from '../../applications/applicationsActions'

const mapStateToProps = ({ applications: { data } }: State): StateProps => {
  return { applications: data }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  addApplication: () =>
    dispatch(
      modalCreators.open({
        action: applicationsTypes.START_ADD,
        title: 'Add application',
        fields: [{ label: 'Name', name: 'name', type: 'text'}]
      })
    )
})

export interface DispatchProps {
  addApplication: () => void
}

export interface StateProps {
  applications: Application[]
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Applications)
