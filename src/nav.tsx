import * as React from 'react';
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
			bottom: 0,
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
		<div className={classes.navArea}>
			<NavUpward
				makePageNumToPositive={props.makePageNumToPositive}
				featuredWorkLength={props.featuredWorkLength}
				topPageNum={props.topPageNum}
				setTopPageNum={props.setTopPageNum}
				decrementTopPageNum={props.decrementTopPageNum}/>
			<NavDownward
				makePageNumToNegative={props.makePageNumToNegative}
				featuredWorkLength={props.featuredWorkLength}
				topPageNum={props.topPageNum}
				setTopPageNum={props.setTopPageNum}
				incrementTopPageNum={props.incrementTopPageNum}
				/>
		</div>
	)
}
