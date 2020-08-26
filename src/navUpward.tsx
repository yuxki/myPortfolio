import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navUpward: {
			display: 'flex',
			justifyContent: 'center',
		},
		transitionArrow: {
			display: 'flex',
			width: '65px',
			height: '27px',
			fill: '#F2BE22',
		},
	}),
);

export default function NavUpward(props) {
	const classes = useStyles();

	return (
		<div
			className={classes.navUpward}
			onClick={props.isAnimating || props.isSlideOut ? null : props.switchElementWithAnimationToUp}
		>
			<svg className={classes.transitionArrow} viewBox="0 0 65 27">
				<path d="M31.88.22l-31.5,25A1,1,0,0,0,1,27H64a1,1,0,0,0,.62-1.78L33.12.22A1,1,0,0,0,31.88.22Z" />
			</svg>
		</div>
	)
}
