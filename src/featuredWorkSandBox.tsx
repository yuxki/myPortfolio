import * as React from 'react';
import Header from "./header";
import VerticalSingleDynamicLayout from "./layout/verticalSingleDynamicLayout";
import HorizontalSingleDynamicLayout from "./layout/horizontalSingleDynamicLayout";
import RightAngleSingleStaticLayout from "./layout/rightAngleSingleStaticLayout";

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

interface FeaturedWorkInfo {
	featuredWorkTitle: string;
	featuredWorkType: string;
	featuredWorkImgSrc: Array<string>;
	featuredWorkImgElem: Array<HTMLImageElement>;
	featuredWorkLayout: string;
}

const graphicsDesignInfo: FeaturedWorkInfo = {
	featuredWorkTitle: 'Graphics Design',
	featuredWorkType: 'img',
	featuredWorkImgSrc: ['tokyoHalloween.jpg', 'pawoon.jpg', 'flyingRabbit_wide.jpg', 'interface_logo.png'],
	featuredWorkImgElem: [new Image()],
	featuredWorkLayout: 'single_img',
}

const applicationDesignInfo: FeaturedWorkInfo = {
	featuredWorkTitle: 'Application Design',
	featuredWorkType: 'img',
	featuredWorkImgSrc: [
		'./appImg/calcurate.png'
		, './appImg/camera.png'
		, './appImg/cookingRecipe.png'
		, './appImg/game.png'
		, './appImg/itemDetail.png'
		, './appImg/mapDist.png'
		, './appImg/musicLogin.png'
		, './appImg/musicPlay.png'
		, './appImg/readingBook.png'
		, './appImg/snsProfile.png'
		, './appImg/sportLogin.png'
		, './appImg/weather.png'
	],
	featuredWorkImgElem: [new Image()],
	featuredWorkLayout: 'single_img',
}

const threDGraphicsInfo: FeaturedWorkInfo = {
	featuredWorkTitle: '3D Graphics',
	featuredWorkType: 'img',
	featuredWorkImgSrc: [
		'./threeDimage/lightHouse_night.png'
		, './threeDimage/lighthouse_back.jpg'
		, './threeDimage/lighthouse_front.jpg'
		, './threeDimage/lighthouse_right.jpg'
		, './threeDimage/lightHouse_wire.jpg'
		, './threeDimage/lightHouse_morning.png'
	],
	featuredWorkImgElem: [new Image(), new Image()],
	featuredWorkLayout: 'double_img',
}


const featuredWorkInfoArry: Array<FeaturedWorkInfo> =
	[graphicsDesignInfo];

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sandBoxArea: {
			position: 'relative',
			height: '100vh',
			width: '100vw',
			backgroundColor: '#FFFFFF',
			// transitionDuration: '1s',
			zIndex: 51,
		},
		featuredWorkContentDummy: {
			width: '870px',
			position: 'absolute',
			top: theme.spacing(20),
			left: '50%',
			transform: 'translateX(-50%)',
		},
	})
)

export default function FeaturedWorkSandBox() {
	const classes = useStyles();

	return (
		<div>
			<Header />
			<div className={classes.sandBoxArea}>
				<div className={classes.featuredWorkContentDummy}>

					<VerticalSingleDynamicLayout
						imageInfoList={graphicsDesignInfo.featuredWorkImgSrc}
						featuredWorkTitle={graphicsDesignInfo.featuredWorkTitle}
					/>
					<HorizontalSingleDynamicLayout
						imageInfoList={applicationDesignInfo.featuredWorkImgSrc}
						featuredWorkTitle={applicationDesignInfo.featuredWorkTitle}
					/>

					<RightAngleSingleStaticLayout
						imageInfoList={threDGraphicsInfo.featuredWorkImgSrc}
						featuredWorkTitle={threDGraphicsInfo.featuredWorkTitle}
					/>
				</div>
			</div>
		</div>
	)
}
