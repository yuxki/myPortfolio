import * as React from 'react';
import clsx from 'clsx';
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
			position: 'relative',
			height: '100vh',
			backgroundColor: '#FFFFFF',
			transitionDuration: '1s',
			zIndex:50,
			// backgroundColor: 'rgb(255,255,255,0.5)',
		},
		topPageArea: {
			display: 'block',
			position: 'relative',
			height: 'inherit',
			margin: theme.spacing(0, 10),
		},
	}),
);

export default function TopPage() {
	const classes = useStyles();

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

	// ページの切り替えを管理するState
	const [topPageNum, setTopPageNum] = React.useState(0);

	// アニメーション中か否かを管理するState
	const [isAnimating, setIsAnimating] = React.useState(false);

	// TopPageがスライドしているか否かを管理するState
	const [isSlideOut, setIsSlideOut] = React.useState(false);

	// アニメーション発火を目的としたref
	const animationTarget = React.useRef(null);
	const slideArea = React.useRef(null);

	React.useEffect(() => {
		console.log('didmount');
	});

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

	function sleep(): Promise<boolean> {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('sleep out');
				resolve()
			}, 500)
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
		await sleep();
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
		await sleep();
		await transactClassesToElements('ADD', animationTarget, ['fade', 'moveContentToBottom']);
		await handleAnimationEvent(animationTarget, 'animationend');
		await transactClassesToElements('REMOVE', animationTarget, ['waitAppearFromTop', 'fade', 'moveContentToBottom']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);

		return;
	}

	// topPageを上に移動させるファンクション
	async function slideTopPageOut() {
		console.log('slideTopPageIn');
		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);
		await transactClassesToElements('ADD', slideArea, ['slideTopPage']);
		await handleAnimationEvent(slideArea, 'transitionend');
		await setStateFunc(handleAnimationEnd);
		setIsSlideOut(true);
	}

	// topPageを上に移動させるファンクション
	async function slideTopPageIn() {
		console.log('slideTopPageIn');
		await setStateFunc(handleAnimationStart);
		await transactClassesToElements('REMOVE', slideArea, ['slideTopPage']);
		await handleAnimationEvent(slideArea, 'transitionend');
		await setStateFunc(handleAnimationEnd);
		setIsSlideOut(false);
	}

	// topPageNumを変更するファンクション群
	function incrementTopPageNum() {
		setTopPageNum((topPageNum + 1));
	}

	function decrementTopPageNum() {
		setTopPageNum((topPageNum - 1));
	}

	// isAnimatingを変更するファンクション群
	function handleAnimationStart() {
		setIsAnimating(true);
	}

	function handleAnimationEnd() {
		setIsAnimating(false);
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

	return (
		<div>
			<div className={clsx(classes.staticArea, 'slideArea')}
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
								featuredWorkType={featuredWorkInfoArry[topPageNum - 1].featuredWorkType}
								featuredWorkImgSrc={featuredWorkInfoArry[topPageNum - 1].featuredWorkImgSrc}
								featuredWorkLayout={featuredWorkInfoArry[topPageNum - 1].featuredWorkLayout} />
							<FeaturedWorkTitle featuredWorkTitle={featuredWorkInfoArry[topPageNum - 1].featuredWorkTitle} />
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
			/>
		</div>
	)
}
