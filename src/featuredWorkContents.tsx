import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkContent: {
			position: 'absolute',
			top: 0,
			left: '50%',
			transform: 'translateX(-50%)',
		},
		primaryGraphicDesign: {
			height: '328px',
		},
	})
);

export default function FeaturedWorkContents(props) {
	const classes = useStyles();
	return (
			<div className={clsx(classes.featuredWorkContent)}>
				<img src={props.featuredWorkImgSrc[0]} className={classes.primaryGraphicDesign} />
			</div>
	)
}
