import { createAsyncMiddleware } from 'redux-arc'
import { contains } from 'ramda'
import axios from 'axios'

const buildParameters = (options) => {
  const { payload, method } = options

  if (payload) {
    return contains(method, ['put', 'post', 'patch'])
      ? { data: payload }
      : { params: payload }
  }

  return {}
}

const asyncTask = store => done => options => {
  const { method, url, payload } = options
  
  const config = {
    method,
    url, 
    ...buildParameters(options)
  }

  return axios.request(config).then(
    response => done(null, response),
    error => done(error, null),
  );
};

export default createAsyncMiddleware(asyncTask)