import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import VerticalSingleDynamicLayout from "./layout/verticalSingleDynamicLayout";
import HorizontalSingleDynamicLayout from "./layout/horizontalSingleDynamicLayout";
import RightAngleSingleStaticLayout from "./layout/rightAngleSingleStaticLayout";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		featuredWorkContent: {
			width: '100%',
		},
	})
);

export default function FeaturedWorkContents(props) {
	const classes = useStyles();
	const featuredWorkInfoArry = props.featuredWorkInfoArry;
	const topPageNum = props.topPageNum;

	function isMatchPageNums(contentNum: number, topPageNum: number): boolean {
		return (contentNum == topPageNum - 1) ? true : false;
	}
	return (
		<div className={clsx(classes.featuredWorkContent)}>
			<HorizontalSingleDynamicLayout
				imageInfoSrcList={featuredWorkInfoArry[1].featuredWorkImgSrc}
				featuredWorkTitle={featuredWorkInfoArry[1].featuredWorkTitle}
			/>
			<VerticalSingleDynamicLayout
				featuredWorkInfo={featuredWorkInfoArry[0]}
			/>
			<RightAngleSingleStaticLayout
				imageInfoSrcList={featuredWorkInfoArry[2].featuredWorkImgSrc}
				featuredWorkTitle={featuredWorkInfoArry[2].featuredWorkTitle}
			/>
		</div>
	)
}
