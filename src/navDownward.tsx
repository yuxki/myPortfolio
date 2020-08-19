import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navDownward: {
			display: 'flex',
			backgroundColor: '#F2BE22',
			marginLeft: '56px',
			width: '56px',
			height: '56px',
			justifyContent: 'center',
			alignItems: 'center',
		},
		root: {
			display: 'inherit',
			color: '#FFFFFF',
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
			onClick={props.isAnimating ? null : navEvent}
		>
			<ExpandMoreIcon
				fontSize='large'
				classes={{ root: classes.root }}
			/>
		</div>
	)
}
