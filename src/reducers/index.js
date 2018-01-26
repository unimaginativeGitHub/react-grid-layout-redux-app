import { combineReducers } from 'redux'
import layouts from './layouts'
// import nextReducerSetToAdd from './nextReducerSetToAdd'

const layoutApp = combineReducers({
  layouts,
  // nextReducerSetToAdd
})

export default layoutApp
