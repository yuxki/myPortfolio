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
			width: '870px',
			transform: 'translateX(-50%)',
		},
		primaryGraphicDesign: {
			height: '328px',
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
					imageInfoSrcList={featuredWorkInfoArry[0].featuredWorkImgSrc}
					featuredWorkTitle={featuredWorkInfoArry[0].featuredWorkTitle}
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
