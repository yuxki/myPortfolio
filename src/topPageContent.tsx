import * as React from 'react';
import clsx from 'clsx';
import PageLoading from "./pageLoading";
import Header from "./header";
import Billboard from "./billboard";
import ContentChange from "./contentChange";
import Nav from "./nav"
import FeaturedWorkContents from "./featuredWorkContents";
import FeaturedWorkTitle from "./featuredWorkTitle";
import Footer from "./footer";
import NavUpward from './navUpward';
import { makeStyles, useTheme, Theme, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					overflow: 'hidden',
				},
				body: {
					overflow: 'hidden',
				},
				footer: {
					zIndex: -100,
					position: 'fixed',
					bottom: 0,
				},
			},
		},
	},
})

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		staticArea: {
			position: 'relative',
			height: '100vh',
			backgroundColor: '#FFFFFF',
			transitionDuration: '1s',
			zIndex: 51,
			// backgroundColor: 'rgb(255,255,255,0.5)',
		},
		topPageArea: {
			display: 'block',
			position: 'relative',
			height: 'inherit',
			margin: theme.spacing(0, 10),
		},
		'@global': {
			// overflow: 'hidden',
		},
	}),
);

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
	featuredWorkImgSrc: [
		'tokyoHalloween.jpg'
		, 'pawoon.jpg'
		, 'flyingRabbit_wide.jpg'
		, 'interface_logo.png'
	],
	featuredWorkImgElem: [],
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
	featuredWorkImgElem: [],
	featuredWorkLayout: 'double_img',
}

const featuredWorkInfoArry: Array<FeaturedWorkInfo> =
	[graphicsDesignInfo, applicationDesignInfo, threDGraphicsInfo];

function instantiateImages(infoArray: Array<FeaturedWorkInfo>) {
	infoArray.forEach((imageInfo) => {
		let imageArray: Array<HTMLImageElement> = [];
		imageInfo.featuredWorkImgSrc.forEach(() => {
			imageArray.push(new Image());
		});
		imageInfo.featuredWorkImgElem = imageArray;
	})
}

function handSrcToImageElem(infoArray: Array<FeaturedWorkInfo>) {
	infoArray.forEach((info) => {
		for (let i = 0; i < info.featuredWorkImgSrc.length; i++) {
			info.featuredWorkImgElem[i].src = info.featuredWorkImgSrc[i];
		}
	})
}

function joinFeaturedWorkImgElem(infoArray: Array<FeaturedWorkInfo>): Array<HTMLImageElement> {
	let htmlImageArray: Array<HTMLImageElement> = [];
	infoArray.forEach((info) => {
		htmlImageArray = htmlImageArray.concat(info.featuredWorkImgElem);
	});
	return htmlImageArray;
}

instantiateImages(featuredWorkInfoArry);
console.log(featuredWorkInfoArry);
const htmlImageArray = joinFeaturedWorkImgElem(featuredWorkInfoArry);


/*------------------------- ここからコンポーネント -------------------------*/
export default function TopPageContent(props) {
	const isPreload = props.isPreload;
	const handleDonePreload = props.handleDonePreload;

	const classes = useStyles();

	function setLoadAllCallback(elems: Array<HTMLImageElement>, callback) {
		let parElemPercent = 100 / elems.length;
		let remainPercent = 100 / elems.length;

		let count = 0;

		for (let i = 0; i < elems.length; ++i) {
			elems[i].onload = function() {
				fillDoneLoadingPercent(parElemPercent);
				++count;
				if (count == elems.length) {
					fillDoneLoadingPercent(remainPercent);
					callback()
				}
			}
		}
	}

	React.useEffect(() => {
		if (!isPreload) {
			handSrcToImageElem(featuredWorkInfoArry);
			setLoadAllCallback(htmlImageArray, async function() {
				console.log('load is finished')
				await sleep(500);
				await setStateFunc(handleDonePreload);
			})
		}
	});

	// ページ切り替え番号のHook
	const [topPageNum, setTopPageNum] = React.useState(0);

	// アニメーション中か否かのHook
	const [isAnimating, setIsAnimating] = React.useState(false);

	// TopPageがスライドしているか否かのHook
	const [isSlideOut, setIsSlideOut] = React.useState(false);

	// ロード完了を表すパーセントのHopk
	const [doneLoadingPercent, setDoneLoadingPercent] = React.useState(0);

	function fillDoneLoadingPercent(fillPercent: number) {
		if (doneLoadingPercent >= 100) return
		setDoneLoadingPercent((doneLoadingPercent + fillPercent));
	}

	// アニメーション発火を目的としたref
	const animationTarget = React.useRef(null);
	const slideArea = React.useRef(null);

	// クラスで探したelementに、任意のクラスを複数追加・削除するPromise関数を返す
	function transactClassesToElements(mode: string, targetElement: any, transactedClasses: Array<string>) {
		return new Promise((resolve, reject) => {
			const element = targetElement;

			if (mode === 'ADD') {
				element.current.classList.add(...transactedClasses);

			} else if (mode === 'REMOVE') {
				element.current.classList.remove(...transactedClasses);
			}
			resolve();
		})
	}

	// アニメーションのイベントをハンドリングするPromise関数を返す
	function handleAnimationEvent(targetElement: any, eventType: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			const element = targetElement;

			const listener = () => {
				console.log(eventType + ' is finished');
				element.current.removeEventListener(eventType, listener);
				resolve();
			};
			element.current.addEventListener(eventType, listener);
		});
	}

	// setStateを含む任意のfunctionを実行するPromise関数を返す
	function setStateFunc(func): Promise<boolean> {
		return new Promise((resolve, reject) => {
			func();
			resolve();
		})
	}

	function sleep(sleepTime: number): Promise<boolean> {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('sleep out');
				resolve()
			}, sleepTime)
		})
	}

	// アニメーションを追加→アニメーション実行のハンドリング→setStateの順序で、要素の切り替えを行う
	async function switchElementWithAnimationToDown(): Promise<void> {

		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);

		// フェードアウトのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['fadeOut', 'moveContentToTop']);
		await handleAnimationEvent(animationTarget, 'transitionend');
		await transactClassesToElements('REMOVE', animationTarget, ['fadeOut', 'moveContentToTop']);

		// topPageNumを変更する
		await setStateFunc(incrementTopPageNum);

		// フェードインのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['waitAppearFromBottom']);
		// （top→translate）の順番を守るため、translateの前にsleep処理を実行する
		await sleep(500);
		await transactClassesToElements('ADD', animationTarget, ['fade', 'moveContentToTop']);
		await handleAnimationEvent(animationTarget, 'animationend');
		await transactClassesToElements('REMOVE', animationTarget, ['waitAppearFromBottom', 'fade', 'moveContentToTop']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);

		return;
	}

	// アニメーションを追加→アニメーション実行のハンドリング→setStateの順序で、要素の切り替えを行う
	async function switchElementWithAnimationToUp(): Promise<void> {

		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);

		// フェードアウトのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['fadeOut', 'moveContentToBottom']);
		await handleAnimationEvent(animationTarget, 'transitionend');
		await transactClassesToElements('REMOVE', animationTarget, ['fadeOut', 'moveContentToBottom']);

		// topPageNumを変更する
		await setStateFunc(decrementTopPageNum);

		// フェードインのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['waitAppearFromTop']);
		// （top→translate）の順番を守るため、translateの前にsleep処理を実行する
		await sleep(500);
		await transactClassesToElements('ADD', animationTarget, ['fade', 'moveContentToBottom']);
		await handleAnimationEvent(animationTarget, 'animationend');
		await transactClassesToElements('REMOVE', animationTarget, ['waitAppearFromTop', 'fade', 'moveContentToBottom']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);

		return;
	}

	// topPageを上に移動させるファンクション
	async function slideTopPageOut() {

		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);
		await setStateFunc(handleSlideOut);
		// await transactClassesToElements('ADD', slideArea, ['slideTopPage']);
		await handleAnimationEvent(slideArea, 'transitionend');
		await setStateFunc(handleAnimationEnd);
	}

	// topPageを上に移動させるファンクション
	async function slideTopPageIn() {
		console.log('slideTopPageIn');
		await setStateFunc(handleAnimationStart);
		await setStateFunc(handleSlideIn);
		// await transactClassesToElements('REMOVE', slideArea, ['slideTopPage']);
		await handleAnimationEvent(slideArea, 'transitionend');
		await setStateFunc(handleAnimationEnd);
	}

	// topPageNumを変更するファンクション群
	function incrementTopPageNum() {
		setTopPageNum((topPageNum + 1));
	}

	function decrementTopPageNum() {
		setTopPageNum((topPageNum - 1));
	}

	function initTopPageNum() {
		setTopPageNum(0);
	}

	// isAnimatingを変更するファンクション群
	function handleAnimationStart() {
		setIsAnimating(true);
	}

	function handleAnimationEnd() {
		setIsAnimating(false);
	}

	// isSlideOutを変更するファンクション群
	function handleSlideOut() {
		setIsSlideOut(true);
	}

	function handleSlideIn() {
		setIsSlideOut(false);
	}

	// wheelのイベントで画面の切り替えを行うファンクション群
	function switchElementWithAnimationBywheel(event) {
		if (event.deltaY > 120) {
			if (topPageNum === featuredWorkInfoArry.length) {
				slideTopPageOut();
				return
			}
			switchElementWithAnimationToDown();
		};

		if (event.deltaY < -120) {
			if (topPageNum === 0) {
				return
			}
			switchElementWithAnimationToUp();
		};
	}

	function slideTopPageInBywheel(event) {
		if (event.deltaY < -120) {
			slideTopPageIn();
		}
		return
	}

	// footerのリンクを押下した時の画面に影響を与えるファンクション群

	// footerのリンク押下時の専用処理
	async function switchElementWithAnimationToBillboard(): Promise<void> {

		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);

		// フェードアウトのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['fadeOut', 'moveContentToBottom']);
		await handleAnimationEvent(animationTarget, 'transitionend');
		await transactClassesToElements('REMOVE', animationTarget, ['fadeOut', 'moveContentToBottom']);

		// topPageNumを変更する
		await setStateFunc(initTopPageNum);

		// フェードインのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', animationTarget, ['waitAppearFromTop']);
		// （top→translate）の順番を守るため、translateの前にsleep処理を実行する
		await sleep(500);
		await transactClassesToElements('ADD', animationTarget, ['fade', 'moveContentToBottom']);
		await handleAnimationEvent(animationTarget, 'animationend');
		await transactClassesToElements('REMOVE', animationTarget, ['waitAppearFromTop', 'fade', 'moveContentToBottom']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);

		return;
	}

	function resetState() {
		setIsSlideOut(false)
		initTopPageNum();
	}



	return (
		<div>
			<PageLoading
				isPreload={isPreload}
				doneLoadingPercent={doneLoadingPercent}
			/>
			<ThemeProvider theme={theme}>
				<CssBaseline />
			</ThemeProvider>
			<Header resetState={resetState} />
			<div className={clsx(classes.staticArea, isSlideOut && 'slideTopPage')}
				onWheel={isAnimating
					? null
					: isSlideOut ? slideTopPageInBywheel : switchElementWithAnimationBywheel
				}
				ref={slideArea}
			>
				<div className={clsx(classes.topPageArea, 'animationTarget')}
					ref={animationTarget}
				>
					{topPageNum === 0 && (
						<Billboard />
					)}
					{topPageNum > 0 && [
						<div>
							<FeaturedWorkContents
								featuredWorkInfoArry={featuredWorkInfoArry}
								topPageNum={topPageNum}
							/>
							<FeaturedWorkTitle />
							<Nav
								featuredWorkLength={featuredWorkInfoArry.length}
								topPageNum={topPageNum}
								isAnimating={isAnimating}
								isSlideOut={isSlideOut}
								switchElementWithAnimationToDown={switchElementWithAnimationToDown}
								switchElementWithAnimationToUp={switchElementWithAnimationToUp}
								slideTopPageOut={slideTopPageOut}
							/>
						</div>
					]}
					{topPageNum === 0 && (
						<ContentChange
							switchElementWithAnimationToDown={switchElementWithAnimationToDown}
						/>
					)}
				</div>
			</div>
			<Footer
				isAnimating={isAnimating}
				isSlideOut={isSlideOut}
				slideTopPageInBywheel={slideTopPageInBywheel}
				resetState={resetState}
			/>
		</div>
	)
}
