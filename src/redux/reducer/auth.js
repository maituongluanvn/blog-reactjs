import axios from 'axios'
const initState = {
	user: {},
}
const authReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case 'LOGIN':
			const data = login(payload)
			console.log(data)
			return { ...state, user: login(payload) }
		default:
			return state
	}
}

export default authReducer
