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
		root: {
			display: 'flex',
			margin: theme.spacing(1, 0),
			textAlign: 'center',
			fontSize:'47px',
		},
	}),
);

export default function Logo() {
	const classes = useStyles();

	return (
		<div className={classes.logoArea}>
			<img src={'peelingEgg.svg'} style={{ display: 'flex', width: 78, height: 89 }} />
			<Typography variant="h3" classes={{ root: classes.root }}>
				Atelier Hiroyuki
			</Typography>
		</div>
	);
}
