import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkContent: {
			position: 'absolute',
			top:0,
			left:'50%',
			transform: 'translateX(-50%)',
		},
		primaryGraphicDesign: {
			height: '328px',
		},
	})
);

export default function FeaturedWork() {
	const classes = useStyles();
	return (
		<div className={classes.featuredWorkContent}>
			<img src={"pawoon.jpg"} className={classes.primaryGraphicDesign} />
		</div>
	)
}
