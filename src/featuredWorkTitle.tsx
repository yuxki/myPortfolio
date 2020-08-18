import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkTitleArea: {
			position: 'absolute',
			bottom:0,
			left: 0,
		},
		h2: {
			fontSize: '66px',
			fontWeight: 'lighter',
		}
	})
);

export default function FeaturedWorkTitle(props) {
	const classes = useStyles();
	return (
		<div className={clsx(classes.featuredWorkTitleArea)}>
			<Typography variant="h2" classes={{ h2: classes.h2 }}>
				{props.featuredWorkTitle}
			</Typography>
		</div>
	)
}
