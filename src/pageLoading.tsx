import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, Theme, createStyles,} from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		pageLoadingArea: {
			display: 'none',
			position: 'fixed',
			width: '100vw',
			height: '100vh',
			backgroundColor: '#FFFFFF',
			transitionDuration: '0.5s',
			zIndex: 200,
		},
		appearLoadingArea: {
			display: 'flex: !important',
		}
	}),
)

export default function PageLoading(props){
const classes = useStyles();

	return (
		<div className={clsx(classes.pageLoadingArea,
			props.isPageLoading && classes.appearLoadingArea)}
		>
		</div>
	)
}
