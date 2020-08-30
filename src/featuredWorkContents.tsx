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
			top: '50%',
			left: '50%',
			width: '100%',
			transform: 'translate(-50%, -50%)',
		},
		hide: {
			display: 'none',
		}
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
			<div className={clsx(!isMatchPageNums(0, topPageNum) && classes.hide)}>
				<VerticalSingleDynamicLayout
					featuredWorkInfo={featuredWorkInfoArry[0]}
				/>
			</ div>
			<div className={clsx(!isMatchPageNums(1, topPageNum) && classes.hide)}>
				<HorizontalSingleDynamicLayout
					imageInfoSrcList={featuredWorkInfoArry[1].featuredWorkImgSrc}
					featuredWorkTitle={featuredWorkInfoArry[1].featuredWorkTitle}
				/>
			</ div>
			<div className={clsx(!isMatchPageNums(2, topPageNum) && classes.hide)}>
				<RightAngleSingleStaticLayout
					imageInfoSrcList={featuredWorkInfoArry[2].featuredWorkImgSrc}
					featuredWorkTitle={featuredWorkInfoArry[2].featuredWorkTitle}
				/>
			</ div>
		</div>
	)
}
