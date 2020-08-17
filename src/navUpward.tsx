import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		navUpward: {
			display: 'flex',
			backgroundColor: '#F2BE22',
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

export default function NavUpward(props) {
	const classes = useStyles();

	// const navEvent = ;

	return (
		<div
			className={classes.navUpward}
			onClick={(props.topPageNum < 0)? props.makePageNumToPositive: props.decrementTopPageNum}
		>
			<ExpandLessIcon
				fontSize='large'
				classes={{ root: classes.root }}
			/>
		</div>
	)
}
