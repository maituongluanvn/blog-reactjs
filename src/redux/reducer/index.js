import counterReducer from './counter'
import authReducer from './auth'
// import loggedReducer from './isLogged'
// import profileReducer from './profile'

import { combineReducers } from 'redux'

const allReducers = combineReducers({
	counter: counterReducer,
	authencation: authReducer,
})

export default allReducers
