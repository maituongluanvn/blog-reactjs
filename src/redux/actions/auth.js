export const login = (payload) => {
	return {
		type: 'LOGIN',
		payload: payload,
	}
}

async function login(payload) {
	const data = await axios
		.post('http://localhost:5000/user/signin', {
			email: payload.email,
			password: payload.password,
		})
		.then((res) => {
			console.log(res)
			if (res) {
				localStorage.setItem(
					'user',
					JSON.stringify({
						token: res.data.token,
						email: res.data.email,
					})
				)
				return JSON.stringify(res)
			}
		})
		.catch(function (error) {
			console.log(error)
		})
	return data
}
