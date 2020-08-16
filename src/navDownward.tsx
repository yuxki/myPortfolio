import * as React from 'react';
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

export default function NavDownward() {
	const classes = useStyles();

	return (
		<div className={classes.navDownward}>
			<ExpandMoreIcon
				fontSize='large'
				classes={{ root: classes.root }}
			/>
		</div>
	)
}
