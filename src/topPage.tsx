import * as React from 'react';
import Billboard from "./billboard";
import ContentChange from "./contentChange";
import Nav from "./nav"
import FeaturedWorkContents from "./featuredWorkContents";
import FeaturedWorkTitle from "./featuredWorkTitle";
import Footer from "./footer";
import NavUpward from './navUpward';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		staticArea: {
			position: 'static',
		},
		topPageArea: {
			display: 'block',
			position: 'relative',
			height: '458px',
			margin: theme.spacing(0, 10),
		},
		footerNavUpward: {
			position: 'absolute',
			top: 0,
			right: theme.spacing(24),
		}
	}),
);

export default function TopPage() {

	// TopPageの内容に当る、featuredWorkの変数を定義する
	interface FeaturedWorkInfo {
		featuredWorkTitle: string;
		featuredWorkType: string;
		featuredWorkImgSrc: Array<string>;
		featuredWorkLayout: string;
	}

	const graphicsDesignInfo: FeaturedWorkInfo = {
		featuredWorkTitle: 'Graphics Design',
		featuredWorkType: 'img',
		featuredWorkImgSrc: ['pawoon.jpg'],
		featuredWorkLayout: 'single_img',
	}

	const applicationDesignInfo: FeaturedWorkInfo = {
		featuredWorkTitle: 'Application Design',
		featuredWorkType: 'img',
		featuredWorkImgSrc: ['sumneil1.png'],
		featuredWorkLayout: 'single_img',
	}

	const threDGraphicsInfo: FeaturedWorkInfo = {
		featuredWorkTitle: '3D Graphics',
		featuredWorkType: 'img',
		featuredWorkImgSrc: ['night_type_under_v2.png', '20190212.png'],
		featuredWorkLayout: 'double_img',
	}

	const featuredWorkInfoArry: Array<FeaturedWorkInfo> =
		[graphicsDesignInfo, applicationDesignInfo, threDGraphicsInfo];

	const classes = useStyles();
	const [topPageNum, setTopPageNum] = React.useState(0);

	function incrementTopPageNum() {
		setTopPageNum((topPageNum + 1));
	}

	function decrementTopPageNum() {
		setTopPageNum((topPageNum - 1));
	}

	function makePageNumToNegative() {
		setTopPageNum(-1);
	}

	function makePageNumToPositive() {
		console.log('makePageNumToPositive is Occred');
		setTopPageNum((featuredWorkInfoArry.length));
	}

	return (
		<div className={classes.staticArea}>
			<div className={classes.topPageArea}>
				{topPageNum === 0 && (
					<Billboard />
				)}
				{topPageNum > 0 && [
					<FeaturedWorkContents
						featuredWorkType={featuredWorkInfoArry[topPageNum - 1].featuredWorkType}
						featuredWorkImgSrc={featuredWorkInfoArry[topPageNum - 1].featuredWorkImgSrc}
						featuredWorkLayout={featuredWorkInfoArry[topPageNum - 1].featuredWorkLayout} />,
					<FeaturedWorkTitle featuredWorkTitle={featuredWorkInfoArry[topPageNum - 1].featuredWorkTitle} />,
					<Nav
						makePageNumToPositive={makePageNumToPositive}
						makePageNumToNegative={makePageNumToNegative}
						featuredWorkLength={featuredWorkInfoArry.length}
						topPageNum={topPageNum}
						setTopPageNum={setTopPageNum}
						incrementTopPageNum={incrementTopPageNum}
						decrementTopPageNum={decrementTopPageNum}
					/>
				]}
				{topPageNum < 0 && [
					<div className={classes.footerNavUpward}>
						<NavUpward
							topPageNum={topPageNum}
							setTopPageNum={setTopPageNum}
							makePageNumToPositive={makePageNumToPositive}
						/>
					</div>
				]}
			</div>
			{topPageNum === 0 && (
				<ContentChange incrementTopPageNum={incrementTopPageNum} />
			)}
			{topPageNum < 0 && (
				<Footer />
			)}
		</div>
	)
}
