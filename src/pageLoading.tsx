import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles, } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pageLoadingArea: {
			display: 'none',
			position: 'fixed',
			width: '100vw',
			height: '100vh',
			backgroundColor: '#FFFFFF',
			transitionDuration: '0.5s',
		},
		appearLoadingArea: {
			display: 'flex',
			zIndex: 200,
		}
	}),
)

export default function PageLoading(prop) {
	const classes = useStyles();
	return (
		<div className={clsx(classes.pageLoadingArea,
			prop.isPageLoading && classes.appearLoadingArea)}
		>
		</div>
	)
}
