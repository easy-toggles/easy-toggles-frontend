import { connect } from 'react-redux'
import { reset, reduxForm } from 'redux-form'
import { reduce } from 'ramda'
import FormModal, { Props } from '../components/FormModal'
import { State } from '../../store'
import { creators } from '../modalActions'
import { Field } from '../../types/form'

const buildInitialValues = (initialValues, field) => {
  const value = field.value ? { [field.name]: field.value } : {}

  return {
    ...initialValues,
    ...value
  }
}

const mapStateToProps = ({ modal, form }: State): StateProps => {
  const { open, action, title, fields } = modal
  const initialValues = reduce(buildInitialValues, {}, fields)

  return {
    open,
    action,
    title,
    fields,
    values: form.formModal?.values ?? {},
    initialValues
  }
}

const mapDispatchToProps = (dispatch): DispatchProps => ({
  onClose: () => dispatch(creators.close()),
  onSubmit: (action, fields, values) => () => {
    dispatch({ type: action, payload: { values, fields } })
    dispatch(creators.close())
    dispatch(reset('formModal'))
  }
})

const mergeProps = (stateProps: StateProps, dispatchProps: DispatchProps): MergeProps => ({
  ...dispatchProps,
  open: stateProps.open,
  title: stateProps.title,
  fields: stateProps.fields,
  initialValues: stateProps.initialValues,
  onSubmit: dispatchProps.onSubmit(stateProps.action, stateProps.fields, stateProps.values)
})

interface DispatchProps {
  onClose: () => void
  onSubmit: (action: string, fields: Field[], values: any) => () => void
}

interface StateProps {
  action: string
  open: boolean
  title: string
  fields: Field[]
  values: any
  initialValues: any
}

interface MergeProps extends Props {
  initialValues: {
    [key: string]: string
  }
}

const form = reduxForm({
  form: 'formModal',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  forceUnregisterOnUnmount: true
})(FormModal)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(form)
