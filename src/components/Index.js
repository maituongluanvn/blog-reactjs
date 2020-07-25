import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
// import Markdown from './Markdown';

const useStyles = makeStyles((theme) => ({
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	},
}))

export default function Index(props) {

	return (
		<Grid item xs={12} md={24}>
			<Typography variant='h6' gutterBottom>
				asd
			</Typography>
			<Divider />
			{/* {posts.map((post) => (
				<Markdown className={classes.markdown} key={post.substring(0, 40)}>
					{post}
				</Markdown>
			))} */}
            ?????
		</Grid>
	)
}
