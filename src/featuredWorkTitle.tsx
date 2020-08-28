import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkTitleArea: {
			display:'flex',
		},
		root:{
			whiteSpace: 'nowrap',
		},
	})
);

export default function FeaturedWorkTitle(props) {
	const classes = useStyles();
	return (
		<div className={classes.featuredWorkTitleArea}>
			<Typography variant="h2" classes={{root : classes.root}}>
				{props.featuredWorkTitle}
			</Typography>
		</div>
	)
}
