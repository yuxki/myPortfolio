import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navDownward: {
			display: 'flex',
			justifyContent: 'center',
		},
		transitionArrow: {
			display: 'flex',
			width: '65px',
			height: '27px',
			fill: '#F2BE22',
			[theme.breakpoints.down('xs')]:{
				width: '48px',
				height: '20px',
			},
		},
	}),
);

export default function NavDownward(props) {
	const classes = useStyles();

	const navEvent = (props.featuredWorkLength === (props.topPageNum))
		? props.slideTopPageOut
		: props.switchElementWithAnimationToDown;

	return (
		<div
			className={classes.navDownward}
			onClick={props.isAnimating || props.isSlideOut ? null : navEvent}
		>
			<svg className={classes.transitionArrow} viewBox="0 0 65 27">
				<path d="M33.12,26.78l31.5-25A1,1,0,0,0,64,0H1A1,1,0,0,0,.38,1.78l31.5,25A1,1,0,0,0,33.12,26.78Z" />
			</svg>
		</div>
	)
}
