import counterReducer from './counter'
// import loggedReducer from './isLogged'
// import profileReducer from './profile'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
    counter: counterReducer,
})

export default allReducers