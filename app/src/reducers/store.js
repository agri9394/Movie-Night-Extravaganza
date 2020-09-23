import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './index'
import { createStore,applyMiddleware } from 'redux'

const middleware = applyMiddleware(logger,thunk)
const store = createStore(rootReducer,middleware)
export default store