import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import VerticalSingleDynamicLayout from "./layout/verticalSingleDynamicLayout";
import HorizontalSingleDynamicLayout from "./layout/horizontalSingleDynamicLayout";
import RightAngleSingleStaticLayout from "./layout/rightAngleSingleStaticLayout";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkContent: {
			position: 'absolute',
			top: theme.spacing(20),
			left: '50%',
			width:'870px',
			transform: 'translateX(-50%)',
		},
		primaryGraphicDesign: {
			height: '328px',
		},
	})
);

export default function FeaturedWorkContents(props) {
	const classes = useStyles();
	const imageInfoList = props.imageInfoList;
	const topPageNum = props.topPageNum;
	const contents = [
		<VerticalSingleDynamicLayout
			imageInfoList={imageInfoList.featuredWorkImgSrc}
			featuredWorkTitle={imageInfoList.featuredWorkTitle}
		/>,
		<HorizontalSingleDynamicLayout
			imageInfoList={imageInfoList.featuredWorkImgSrc}
			featuredWorkTitle={imageInfoList.featuredWorkTitle}
		/>,
		<RightAngleSingleStaticLayout
			imageInfoList={imageInfoList.featuredWorkImgSrc}
			featuredWorkTitle={imageInfoList.featuredWorkTitle}
		/>
	]
	return (
		<div className={clsx(classes.featuredWorkContent)}>
			{contents[topPageNum - 1]}
		</div>
	)
}
