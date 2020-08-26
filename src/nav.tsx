import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
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

		</div>
	)
}
