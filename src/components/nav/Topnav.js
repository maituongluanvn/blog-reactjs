import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
const useStyles = makeStyles((theme) => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`,
	},
	toolbarTitle: {
		flex: 1,
	},
	toolbarSecondary: {
		justifyContent: 'space-between',
		overflowX: 'auto',
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0,
	},
}))

export default function Topnav(props) {
	const classes = useStyles()
	const [User, setUser] = useState({})
	const [anchorEl, setAnchorEl] = useState(null)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleClose = () => {
		setAnchorEl(null)
	}
	async function getUserToken() {
		const data = await localStorage.getItem('user')
		const dataJSON = await JSON.parse(data)
		try {
			await setUser(dataJSON)
		} catch (err) {}
	}
	useEffect(() => {
		getUserToken()
	}, [])
	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography component='h2' variant='h5' color='inherit' align='center' noWrap className={classes.toolbarTitle}>
					Mai Luan Blog
				</Typography>
				<IconButton>
					<SearchIcon />
				</IconButton>
				{User === null ? (
					<div>
						<LinkRouter to='/signin' style={{ textDecoration: 'none' }}>
							<Button size='small'>Log in</Button>
						</LinkRouter>
						<LinkRouter to='/signup' style={{ textDecoration: 'none' }}>
							<Button variant='outlined' size='small'>
								Sign up
							</Button>
						</LinkRouter>{' '}
					</div>
				) : (
					<div>
						<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
							Welcome {User.email}
						</Button>
						<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleClose}>Logout</MenuItem>
						</Menu>
					</div>
				)}
			</Toolbar>
			<Toolbar component='nav' variant='dense' className={classes.toolbarSecondary}>
				<Link color='inherit' noWrap key='2' variant='body2' href='abc' className={classes.toolbarLink}>
					Title
				</Link>
			</Toolbar>
		</React.Fragment>
	)
}
