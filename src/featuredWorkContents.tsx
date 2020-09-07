import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import VerticalSingleDynamicLayout from './layout/verticalSingleDynamicLayout';
import HorizontalSingleDynamicLayout from './layout/horizontalSingleDynamicLayout';
import RightAngleSingleStaticLayout from './layout/rightAngleSingleStaticLayout';
import { FeaturedWorkInfo } from 'featuredWork';
import { graphicsDesignInfo, applicationDesignInfo, threDGraphicsInfo } from './data/featuredWorkData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkContent: {
			width: '100%',
		},
	})
);

export default function FeaturedWorkContents(props) {
	const classes = useStyles();

	return (
		<div className={classes.featuredWorkContent}>
			<HorizontalSingleDynamicLayout
				featuredWorkInfo={applicationDesignInfo}
			/>
			<VerticalSingleDynamicLayout
				featuredWorkInfo={graphicsDesignInfo}
			/>
			<RightAngleSingleStaticLayout
				featuredWorkInfo={threDGraphicsInfo}
			/>
		</div>
	)
}
