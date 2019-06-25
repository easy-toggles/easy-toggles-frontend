// @flow

import { connect } from 'react-redux'
import InputModal, { Props } from '../components/InputModal'
import { State } from '../../store'
import { creators } from '../modalActions'

const mapStateToProps = ({
  modal: {
    open,
    action,
    content: { label, value }
  }
}: State): StateProps => ({
  open,
  action,
  label,
  value
})

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onClose: () => dispatch(creators.close()),
  onConfirm: (action, oldValue) => (newValue) => {
    dispatch({ type: action, payload: { value: newValue, oldValue } })
    dispatch(creators.close())
  }
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): Props => ({
  ...dispatchProps,
  open: stateProps.open,
  label: stateProps.label,
  value: stateProps.value,
  onConfirm: dispatchProps.onConfirm(stateProps.action, stateProps.value)
})

interface DispatchProps {
  onClose: () => void
  onConfirm: (action: string, oldValue: string) => (newValue: string) => void
}

interface StateProps {
  action: string
  open: boolean
  label: string
  value: string
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(InputModal)
