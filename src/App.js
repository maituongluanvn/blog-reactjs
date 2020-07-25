import React from 'react'
import Topnav from './components/nav/Topnav'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import Index from './components/Index'
import MainFeaturedPost from './components/MainFeaturedPost'
import Container from '@material-ui/core/Container'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/signup' exact component={Signup} />
					<Route path='/signin' component={Signin} />
					<Container fixed>
						<Topnav />
						<MainFeaturedPost />
						<Route path='/' component={Index} />
					</Container>
				</Switch>
			</div>
		</Router>
	)
}

export default App
