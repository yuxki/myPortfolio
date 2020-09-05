import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		contentChange: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			position: 'absolute',
			bottom: theme.spacing(3),
			left: '50%',
			transform: 'translateX(-50%)',
			[theme.breakpoints.down('xs')]: {
				bottom: theme.spacing(2),
			},
		},
		root: {
			display: 'flex',
			whiteSpace: 'nowrap',
		},
		colorPrimary: {
			color: theme.palette.primary.main,
		},
		svgArea: {
			display: 'flex',
			justifyContent: 'center',
			marginTop: theme.spacing(1),
		},
		transitionArrow: {
			display: 'flex',
			width: '65px',
			height: '27px',
			fill: theme.palette.primary.main,
			[theme.breakpoints.down('xs')]: {
				width: '48px',
				height: '20px',
			},
		},
	}),
);

export default function ContentChange(props) {
	const classes = useStyles();

	return (
		<div
			className={clsx(classes.contentChange)}
		>
			<Typography variant="h4" color='primary' classes={{ root: classes.root, colorPrimary: classes.colorPrimary }}>
				Scroll Please!!
			</Typography>
			<div className={classes.svgArea}>
				<svg className={classes.transitionArrow} viewBox="0 0 65 27">
					<path d="M33.12,26.78l31.5-25A1,1,0,0,0,64,0H1A1,1,0,0,0,.38,1.78l31.5,25A1,1,0,0,0,33.12,26.78Z" />
				</svg>
			</div>
		</div>
	)
}
