import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Header from './header';
import Billboard from './billboard';
import FeaturedWorkContents from './featuredWorkContents';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		topPageArea: {
			display: 'block',
			position: 'relative',
			width: '100%',
			height: 'auto',
			padding: theme.spacing(0, 10),
			backgroundColor: '#FFFFFF',
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(0, 8),
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 4),
			},
		},
	}),
);

export default function TopPageContent(props) {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className={classes.topPageArea}>
				<Billboard />
				<FeaturedWorkContents />
			</div>
		</div>
	)
}
