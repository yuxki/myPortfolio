import * as React from 'react';
import clsx from 'clsx';
import Header from "./header";
import Billboard from "./billboard";
import FeaturedWorkContents from "./featuredWorkContents";
import FeaturedWorkTitle from "./featuredWorkTitle";
import { makeStyles, useTheme, Theme, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html:{
					overflowX:'hidden',
				},
				body:{
					overflowX:'hidden',
					fontFamily:	'Noto Sans JP, helvetica, Arial, sans-serif',
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
		'./public/tokyoHalloween.png'
		, './public/pawoon.png'
		, './public/flyingRabbit_wide.png'
		, './public/interface_logo.png'
	],
	featuredWorkButtomMaxWidth: ['54px', '78px', '115px', '111px'],
	featuredWorkImgElem: [],
	featuredWorkLayout: 'single_img',
}

const applicationDesignInfo: FeaturedWorkInfo = {
	featuredWorkTitle: 'App Design',
	featuredWorkType: 'img',
	featuredWorkImgSrc: [
		'./public/calcurate.png'
		, './public/camera.png'
		, './public/cookingRecipe.png'
		, './public/game.png'
		, './public/itemDetail.png'
		, './public/mapDist.png'
		, './public/musicLogin.png'
		, './public/musicPlay.png'
		, './public/readingBook.png'
		, './public/snsProfile.png'
		, './public/sportLogin.png'
		, './public/weather.png'
	],
	featuredWorkButtomMaxWidth: [],
	featuredWorkImgElem: [],
	featuredWorkLayout: 'single_img',
}

const threDGraphicsInfo: FeaturedWorkInfo = {
	featuredWorkTitle: '3D Graphics',
	featuredWorkType: 'img',
	featuredWorkImgSrc: [
		'./public/lightHouse_night.png'
		, './public/lighthouse_back.jpg'
		, './public/lighthouse_front.jpg'
		, './public/lighthouse_right.jpg'
		, './public/lightHouse_wire.jpg'
		, './public/lightHouse_morning.png'
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
