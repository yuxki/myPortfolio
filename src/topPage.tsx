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

	// クラスで探したelementに、任意のクラスを複数追加・削除するPromise関数を返す
	function transactClassesToElements(mode: string, targetClass: string, transactedClasses: Array<string>) {
		return new Promise((resolve, reject) => {
			const elements = document.querySelectorAll(targetClass);
			let targetElement: HTMLElement;
			elements.forEach(element => {
				let targetElement = element as HTMLElement;
				if (mode === 'ADD') {
					targetElement.classList.add(...transactedClasses);
				} else if (mode === 'REMOVE')
					targetElement.classList.remove(...transactedClasses);
			});
			resolve();
		})
	}

	// アニメーションのイベントをハンドリングするPromise関数を返す
	function handleAnimationEvent(targetClass: string, eventType: string): Promise<boolean> {
		return new Promise((resolve, reject) => {
			const element = document.querySelector(targetClass);
			const listener = () => {
				console.log(eventType + ' is finished');
				element.removeEventListener(eventType, listener);
				resolve();
			};
			element.addEventListener(eventType, listener);
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
		await transactClassesToElements('ADD', '.animationTarget', ['fadeOut', 'moveContentToTop']);
		await handleAnimationEvent('.fadeOut', 'transitionend');
		await transactClassesToElements('REMOVE', '.animationTarget', ['fadeOut', 'moveContentToTop']);

		// topPageNumを変更する
		await setStateFunc(incrementTopPageNum);

		// フェードインのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', '.animationTarget', ['waitAppearFromBottom']);
		// （top→translate）の順番を守るため、translateの前にsleep処理を実行する
		await sleep();
		await transactClassesToElements('ADD', '.animationTarget', ['fade', 'moveContentToTop']);
		await handleAnimationEvent('.fade', 'animationend');
		await transactClassesToElements('REMOVE', '.animationTarget', ['waitAppearFromBottom', 'fade', 'moveContentToTop']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);
	}

	// アニメーションを追加→アニメーション実行のハンドリング→setStateの順序で、要素の切り替えを行う
	async function switchElementWithAnimationToUp(): Promise<void> {

		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);

		// フェードアウトのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', '.animationTarget', ['fadeOut', 'moveContentToBottom']);
		await handleAnimationEvent('.fadeOut', 'transitionend');
		await transactClassesToElements('REMOVE', '.animationTarget', ['fadeOut', 'moveContentToBottom']);

		// topPageNumを変更する
		await setStateFunc(decrementTopPageNum);

		// フェードインのアニメーションCSSを、クラスの切り替えで発火させる
		await transactClassesToElements('ADD', '.animationTarget', ['waitAppearFromTop']);
		// （top→translate）の順番を守るため、translateの前にsleep処理を実行する
		await sleep();
		await transactClassesToElements('ADD', '.animationTarget', ['fade', 'moveContentToBottom']);
		await handleAnimationEvent('.fade', 'animationend');
		await transactClassesToElements('REMOVE', '.animationTarget', ['waitAppearFromTop', 'fade', 'moveContentToBottom']);

		// アニメーション実行終了のStateに切り替え、イベントの制限を解放する
		await setStateFunc(handleAnimationEnd);
	}

	// topPageを上に移動させる
	async function slideTopPageOut() {
		// アニメーション実行中のStateに切り替え、アニメーション中のイベントを制限する
		await setStateFunc(handleAnimationStart);
		await transactClassesToElements('ADD', '.slideArea', ['slideTopPage']);
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

	return (
		<div>
			<div className={clsx(classes.staticArea, 'slideArea')}>
				<div className={clsx(classes.topPageArea, 'animationTarget')}>
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
								setTopPageNum={setTopPageNum}
								isAnimating={isAnimating}
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
			<div>
				<Footer />
			</div>
		</div>
	)
}
