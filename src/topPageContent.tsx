import * as React from 'react';
import clsx from 'clsx';
import Header from "./header";
import Billboard from "./billboard";
import FeaturedWorkContents from "./featuredWorkContents";
import FeaturedWorkTitle from "./featuredWorkTitle";
import { makeStyles, useTheme, Theme, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html:{
					overflowX:'hidden',
				},
				body:{
					overflowX:'hidden',
				},
				a: {
					color: "#000000",
					textDecoration: 'none',
				},
			},
		},
	},
})

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		staticArea: {
			position: 'relative',
			width: '100%',
			height: 'auto',
			backgroundColor: '#FFFFFF',
			zIndex: 51,
			padding: theme.spacing(0, 10),
			transitionDuration: '1.0s',
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(0, 8),
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 4),
			},
		},
		topPageArea: {
			width: '100%',
			display: 'block',
			position: 'relative',
			height: 'inherit',
		},
	}),
);

interface FeaturedWorkInfo {
	featuredWorkTitle: string;
	featuredWorkType: string;
	featuredWorkImgSrc: Array<string>;
	featuredWorkButtomMaxWidth: Array<string>;
	featuredWorkImgElem: Array<HTMLImageElement>;
	featuredWorkLayout: string;
}

const graphicsDesignInfo: FeaturedWorkInfo = {
	featuredWorkTitle: 'Graphic Design',
	featuredWorkType: 'img',
	featuredWorkImgSrc: [
		'tokyoHalloween.png'
		, 'pawoon.png'
		, 'flyingRabbit_wide.png'
		, 'interface_logo.png'
	],
	featuredWorkButtomMaxWidth: ['54px', '78px', '115px', '111px'],
	featuredWorkImgElem: [],
	featuredWorkLayout: 'single_img',
}

const applicationDesignInfo: FeaturedWorkInfo = {
	featuredWorkTitle: 'App Design',
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
	featuredWorkButtomMaxWidth: [],
	featuredWorkImgElem: [],
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
	featuredWorkButtomMaxWidth: [],
	featuredWorkImgElem: [],
	featuredWorkLayout: 'double_img',
}

const featuredWorkInfoArry: Array<FeaturedWorkInfo> =
	[graphicsDesignInfo, applicationDesignInfo, threDGraphicsInfo];

/*------------------------- ここからコンポーネント -------------------------*/
export default function TopPageContent(props) {
	const classes = useStyles();

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
			<Header />
			<div className={classes.staticArea}>
				<div className={classes.topPageArea}>
					<Billboard />
					<FeaturedWorkContents
						featuredWorkInfoArry={featuredWorkInfoArry}
					/>
					<FeaturedWorkTitle />
				</div>
			</div>
		</div>
	)
}
