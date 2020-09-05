import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logoArea: {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			width: '100%',
		},
		rogoMark: {
			display: 'flex',
			width: '78px',
			height: '89px',
			[theme.breakpoints.down('xs')]: {
				width: '64px',
				height: '73px',
			},
		},
		rogoType: {
			display: 'flex',
			width: '322px',
			height: 'auto',
			margin: theme.spacing(1, 0, 0, 0),
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				maxWidth: '246px',
				height: 'auto',
			},
		},
	}),
);

export default function Logo() {
	const classes = useStyles();

	return (
		<div className={classes.logoArea}>
			<img src={'./public/' + 'peelingEgg.svg'} className={classes.rogoMark} />
			<img src={'./public/' + 'Atelier_Hiroyuki.svg'} className={classes.rogoType} />
		</div>
	);
}
