import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import { Link as LinkRouter } from 'react-router-dom'

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
	return (
		<React.Fragment>
			<Toolbar className={classes.toolbar}>
				<Typography
					component='h2'
					variant='h5'
					color='inherit'
					align='center'
					noWrap
					className={classes.toolbarTitle}
				>
					Mai Luan Blog
				</Typography>
				<IconButton>
					<SearchIcon />
				</IconButton>
				<LinkRouter to='/login' style={{textDecoration: 'none'}}>
					<Button size='small'>Log in</Button>
				</LinkRouter>
				<LinkRouter to='/signup' style={{textDecoration: 'none'}}>
				<Button variant='outlined' size='small'>
					Sign up
				</Button>
				</LinkRouter>
			</Toolbar>
			<Toolbar
				component='nav'
				variant='dense'
				className={classes.toolbarSecondary}
			>
				<Link
					color='inherit'
					noWrap
					key='2'
					variant='body2'
					href='abc'
					className={classes.toolbarLink}
				>
					Title
				</Link>
			</Toolbar>
		</React.Fragment>
	)
}
