import { combineReducers } from 'redux'
import todos from './todos'
import search from './search'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
  visibilityFilter,
  search
})
