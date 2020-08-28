import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from './logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		billboardArea: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			width: '100%',
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 4),
				width: '100%',
				maxWidth: theme.breakpoints.values.sm,
			},
		},
		billboardContent: {
			width: '100%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
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
			<div className={clsx(classes.billboardContent)}>
				<Logo />
				<Typography variant="h6" classes={{ root: classes.root }}>
					作れる を楽しくするために
				</Typography>
			</div>
		</div>
	)
}
