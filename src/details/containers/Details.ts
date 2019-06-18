import { connect } from 'react-redux'
import Details from '../components/Details'
import { State } from '../../store'
import { creators } from '../detailsActions'
import { Application } from '../../types/application'

const mapStateToProps = ({ details }: State): StateProps => {
  return { details }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  publish: (application: Application) => dispatch(creators.publish(application, {id: '5680529164730368' })),
  loadConfig: () => dispatch(creators.loadConfig({}, {id: '5680529164730368' }))
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps) => {
  return {
    ...stateProps,
    ...dispatchProps,
    config: stateProps.details.config,
    publish: () => {
      dispatchProps.publish(stateProps.details)
    }
  }
}

interface StateProps {
  details: Application
}

interface DispatchProps {
  publish: Function,
  loadConfig: Function
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Details)
