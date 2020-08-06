import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
// import Markdown from './Markdown';

export default function Index(props) {
	return (
		<Grid container spacing={3}>
			<Grid item xs={8} sm={8}>
				<Typography variant='h6' gutterBottom>
					Recommend
				</Typography>
				<Divider />
				{/* {posts.map((post) => (
				<Markdown className={classes.markdown} key={post.substring(0, 40)}>
				{post}
				</Markdown>
			))} */}
				<Typography variant='h5' style={{ marginTop: '0.5em' }}>
					Title Post
				</Typography>
				<Typography variant='caption' gutterBottom>
					2020/2020/2020 By Luan Dep trai
				</Typography>

				<Typography variant='body1' style={{ marginTop: '0.6em' }} gutterBottom>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text. All
					the Lorem Ipsum generators on the Internet tend to repeat predefined
					chunks as necessary, making this the first true generator on the
					Internet. It uses a dictionary of over 200 Latin words, combined with
					a handful of model sentence structures, to generate Lorem Ipsum which
					looks reasonable. The generated Lorem Ipsum is therefore always free
					from repetition, injected humour, or non-characteristic words etc.
				</Typography>
			</Grid>
			<Grid item xs={4} sm={4} >
				aaaaaaaa
			</Grid>
		</Grid>
	)
}
