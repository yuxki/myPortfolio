import * as React from 'react';
import Header from "./header";
import VerticalSingleDynamicLayout from "./layout/verticalSingleDynamicLayout"
import HorizontalSingleDynamicLayout from "./layout/horizontalSingleDynamicLayout"

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
					{/*
					<VerticalSingleDynamicLayout
						imageInfoList={graphicsDesignInfo.featuredWorkImgSrc}
						featuredWorkTitle={graphicsDesignInfo.featuredWorkTitle}
					/>
					*/}

					<HorizontalSingleDynamicLayout
						imageInfoList={applicationDesignInfo.featuredWorkImgSrc}
						featuredWorkTitle={applicationDesignInfo.featuredWorkTitle}
					/>
				</div>
			</div>
		</div>
	)
}
