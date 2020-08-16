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

export default function NavUpward() {
	const classes = useStyles();

	return (
		<div className={classes.navUpward}>
			<ExpandLessIcon
				fontSize='large'
				classes={{ root: classes.root }}
			/>
		</div>
	)
}
