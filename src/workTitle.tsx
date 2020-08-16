import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		workTitleContent: {
			position: 'absolute',
			bottom:0,
			left: 0,
			// margin:0,
			// padding:0,
		},
		h2: {
			fontSize: '66px',
			fontWight: 'lighter',
		}
	})
);

export default function WorkTitle() {
	const classes = useStyles();
	return (
		<div className={classes.workTitleContent}>
			<Typography variant="h2" classes={{ h2: classes.h2 }}>
				Graphics Design
			</Typography>
		</div>
	)
}
