import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { detailsReducer, initialState } from './details/detailsReducer'
import thunkMiddleware from 'redux-thunk'
import asyncMidleware from './asyncMiddleware'

const reducer = combineReducers({
  details: detailsReducer
})

const buildInitialState = (): State => ({
  details: initialState
})

const configureStore = (preloadedState: State = buildInitialState()) => {
  const middlewares = [thunkMiddleware, asyncMidleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(reducer, preloadedState, composedEnhancers)

  return store
}

type State = ReturnType<typeof reducer>

export { configureStore, State }

