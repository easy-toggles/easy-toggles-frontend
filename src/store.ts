import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import { detailsReducer, initialState as detailsInitialState } from './details/detailsReducer'
import { applicationsReducer, initialState as applicationsInitialState } from './applications/applicationsReducer'
import { modalReducer, initialState as modalInitialState } from './modal/modalReducer'
import asyncMidleware from './asyncMiddleware'
import sagas from './configureSagas'

const reducer = combineReducers({
  details: detailsReducer,
  applications: applicationsReducer,
  modal: modalReducer,
  form: formReducer
})

const buildInitialState = (): State => ({
  details: detailsInitialState,
  applications: applicationsInitialState,
  modal: modalInitialState
})

const configureStore = (preloadedState: State = buildInitialState()) => {
  const sagaMiddleware = createSagaMiddleware()
  const middlewares = [thunkMiddleware, asyncMidleware, sagaMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(sagas)

  return store
}

type State = ReturnType<typeof reducer>

export { configureStore, State }
