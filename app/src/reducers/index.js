import { combineReducers } from 'redux'
import todos from './todos'
import api from './api'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  api
})
