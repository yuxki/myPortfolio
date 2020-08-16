import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logoArea:{
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		h2: {
			fontWeight: 'lighter',
			display: 'flex',
			fontSize: 47,
			margin: theme.spacing(1, 0),
			textAlign: 'center'
		},
	}),
);

export default function Logo() {
	const classes = useStyles();

	return (
		<div className={classes.logoArea}>
			<img src={'logo.png'} style={{ display: 'flex', width: 78, height: 89 }} />
			<Typography variant="h2" classes={{ h2: classes.h2 }}>
				Atelier Hiroyuki
			</Typography>
		</div>
	);
}
