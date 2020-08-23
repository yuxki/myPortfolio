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
		},
		appearLoadingArea: {
			display: 'flex',
			zIndex: 200,
		},
		loadingStatus: {
			display: 'flex',
			width: '100%',
			height: '100%',
			justifyContent: 'flex-start',
			alignItems: 'center',
		},
		loadingViewBox: {
			display: 'flex',
			width: '150px',
		},
		loadingBar: {
			display: 'flex',
			height: '5px',
			backgroundColor: "#F2BE22",
			'transitionDuration': '0.5s',
		}
	}),
)

export default function PageLoading(props) {
	const classes = useStyles();


	return (
		<div className={clsx(classes.pageLoadingArea,
			!props.isPreload && classes.appearLoadingArea,
		)}
		>
			<div className={classes.loadingStatus}>
				<div className={classes.loadingBar} style={{ width: `${props.doneLoadingPercent}%` }}>
				</div>
			</div>
		</div>
	)
}
