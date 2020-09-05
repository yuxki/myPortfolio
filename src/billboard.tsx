import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from './logo';
import ContentChange from './contentChange';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		billboardArea: {
			display:'flex',
			justifyContent: 'center',
			alignItems: 'center',
			position:'relative',
			width: '100%',
			height: '100vh',
			[theme.breakpoints.down('sm')]: {
				// breakpoint mdと変わりなし
			},
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				maxWidth: theme.breakpoints.values.sm,
				padding: theme.spacing(0, 4),
			},
		},
		billboardContent: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		},
		root: {
			display: 'inherit',
			textAlign: 'center',
		},
	}),
)

export default function Billboard() {
	const classes = useStyles();

	return (
		<div className={classes.billboardArea}>
			<div className={classes.billboardContent}>
				<Logo />
				<Typography variant='h6' classes={{ root: classes.root }}>
					作れる を楽しくするために
				</Typography>
			</div>
			<ContentChange />
		</div>
	)
}
