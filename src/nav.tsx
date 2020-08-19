import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NavUpward from './navUpward';
import NavDownward from './navDownward';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navArea: {
			display: 'flex',
			position: 'absolute',
			bottom: theme.spacing(12),
			right: 0,
		},
		root: {
			display: 'inherit',
			color: '#FFFFFF',
		},
	}),
);

export default function Nav(props) {
	const classes = useStyles();


	return (
		<div className={clsx(classes.navArea)} >
			<NavUpward
				makePageNumToPositive={props.makePageNumToPositive}
				featuredWorkLength={props.featuredWorkLength}
				topPageNum={props.topPageNum}
				setTopPageNum={props.setTopPageNum}
				isAnimating={props.isAnimating}
				decrementTopPageNum={props.decrementTopPageNum}
				/>
			<NavDownward
				makePageNumToNegative={props.makePageNumToNegative}
				featuredWorkLength={props.featuredWorkLength}
				topPageNum={props.topPageNum}
				setTopPageNum={props.setTopPageNum}
				incrementTopPageNum={props.incrementTopPageNum}
				switchElementWithAnimation={props.switchElementWithAnimation}
				isAnimating={props.isAnimating}
				incrementSwitch={props.incrementSwitch}
				slideTopPageOut={props.slideTopPageOut}
				/>
		</div>
	)
}
