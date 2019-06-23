import { expectSaga } from 'redux-saga-test-plan'
import sagas from '../../../src/sagas/publishWatcher'
import * as actions from '../../../src/details/detailsActions'

describe('publishWatcher', () => {
  test('publishes', () => {
    const data = {
      config: {
        someFeature: ['pikachu']
      },
      name: 'pokemon'
    }

    return expectSaga(sagas)
      .withState({
        details: data
      })
      .dispatch({ type: actions.types.START_PUBLISH, payload: { id: 1 } })
      .put(actions.creators.publish(data, { id: 1 }))
      .silentRun()
  })
})
