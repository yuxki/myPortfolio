import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
	menuButtonIcon: {
		position: 'relative',
		width: '40px',
		height: '28px',
	},
	menuButtonBar: {
		position: 'absolute',
		width: '40px',
		height: '4px',
		backgroundColor: '#000000',
		transitionDuration: '0.4s',
		transitionTimingFunction: 'cubic-bezier(1, 0, 0.5, 1)',
	},
	topBar: {
		top: 0,
	},
	middleBar: {
		top: 12,
	},
	bottomBar: {
		bottom: 0,
	},
	menuButtonOpen_top: {
		backgroundColor: '#FFFFFF',
		transform: 'translateY(12px) rotate(225deg)',
	},
	menuButtonOpen_middle: {
		opacity: 0,
		transitionDuration: '225ms',
		transform: 'translateY(-12px)',
	},
	menuButtonOpen_bottom: {
		backgroundColor: '#FFFFFF',
		transform: ' translateY(-12px) rotate(315deg)',
	},
}
);

export default function MenuButton(props) {
	const classes = useStyles();
	const onClick = props.onClick;
	const open: boolean = props.open;

	return (
		<div className={classes.menuButtonIcon}
			onClick={onClick}
		>
			<div className={clsx(classes.menuButtonBar, classes.topBar, open && classes.menuButtonOpen_top)}></div>
			<div className={clsx(classes.menuButtonBar, classes.middleBar, open && classes.menuButtonOpen_middle)}></div>
			<div className={clsx(classes.menuButtonBar, classes.bottomBar, open && classes.menuButtonOpen_bottom)}></div>
		</div>
	)
}
