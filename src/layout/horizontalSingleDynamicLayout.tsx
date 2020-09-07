import * as React from 'react';
import { MutableRefObject } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FeaturedWorkTitle from '../featuredWorkTitle'
import { FeaturedWorkInfo } from 'featuredWork';

// ブラウザがIEの場合、他のブラウザの場合とは別の処理を行う。そのためuserAgentからブラウザがIEか否かを判定しておく。
const userAgent = window.navigator.userAgent.toLowerCase();
const isIe = (userAgent.indexOf('msie') > 0) || (userAgent.indexOf('trident') > 0);

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backgroundArea: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 'calc(100vh + 80px)',
			minHeight: '580px',
			margin: '0 calc(50% - 50vw)',
			backgroundColor: theme.palette.secondary.light,
		},
		horizontalLayout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
		},
		mainImageArea: {
			display: 'flex',
			flexDirection: 'column-reverse',
			position: 'relative',
			zIndex: 5,
			width: '184px',
			height: '368px',
			margin: theme.spacing(0, 4, 2, 0),
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'row',
				justifyContent: 'center',
				margin: theme.spacing(0, 0, 3, 0),
			},
			[theme.breakpoints.down('xs')]: {
				width: '151px',
				height: '302px',
				margin: theme.spacing(0, 0, 2, 0),
			},
		},
		mainImageWrap: {
			position: 'relative',
			display: 'flex',
			height: '100%',
		},
		mainImage: {
			display: 'flex',
			width: '100%',
			height: '100%',
			[theme.breakpoints.down('sm')]: {
			},
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				height: '100%',
			},
		},
		svgFrameArea: {
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				padding: '6% 6% 6% 6%',
			},
			[theme.breakpoints.down('xs')]: {
			},
		},
		svgFrameWrap: {
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				width: '88%',
				height: '95%',
			},
			[theme.breakpoints.down('xs')]: {
			},
		},
		iphoneXFrameSVG: {
			width: '0px',
			height: '0px',
		},
		mainAppImage: {
			position: 'absolute',
			left: '12px',
			bottom: '11px',
			width: '160px',
			height: '346.7px',
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				height: '100%',
				top: 0,
				left: 0,
			},
			[theme.breakpoints.down('xs')]: {
			},
		},
		clipedAppImage: {
			width: '100%',
			height: '100%',
			[theme.breakpoints.down('sm')]: {
				top: 0,
				left: 0,
			},
			[theme.breakpoints.down('xs')]: {
			},
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
			position: 'relative',
			zIndex: 10,
			width: '650px',
			height: 'auto',
			paddingTop: theme.spacing(3),
			margin: theme.spacing(2, 0, 0, 0),
			[theme.breakpoints.down('sm')]: {
				alignItems: 'center',
				flexWrap: 'nowrap',
				width: '100vw',
				height: '204px',
				padding: '0px',
				margin: '0 calc(50% - 50vw)',
				overflowX: 'auto',
				'-ms-overflowX': 'scroll',
				'-ms-overflowY': 'hidden',
			},
			[theme.breakpoints.down('xs')]: {
				height: '178px',
			},
		},
		imageButton: {
			display: 'flex',
			justifyContent: 'center',
			position: 'relative',
			width: '73px',
			minWidth: '73px',
			height: '156px',
			minHeight: '156px',
			margin: theme.spacing(0, 4, 2, 0),
			cursor: 'pointer',
			pointerEvents: 'auto',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(0, 5, 0, 0),
				boxShadow: '0px 1px 6px rgba(0,0,0,0.16)',
			},
			[theme.breakpoints.down('xs')]: {
				width: '60px',
				minWidth: '60px',
				height: '130px',
				minHeight: '130px',
				margin: theme.spacing(0, 3, 0, 0),
			},
		},
		imageButtonImage: {
			display: 'flex',
			position: 'absolute',
			zIndex: 5,
			width: '100%',
			height: '100%',
			boxSizing: 'border-box',
			border: ' 1px solid #D8D8D8',
		},
		expandingBall: {
			position: 'absolute',
			top: 0,
			right: 0,
			zIndex: 10,
			width: '1px',
			height: '1px',
			borderRadius: '50%',
			backgroundColor: 'rgba(242, 190, 34, 0.5)',
			transitionDuration: '200ms',
			transitionTimingFunction: 'ease-out',
			[theme.breakpoints.down('sm')]: {
				top: '-16px',
				left: '50%',
				transform: 'translateX(-50%)',
			},
		},
		expand: {
			transform: 'scale(14)',
		},
		titleArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(1, 0, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(-2, 0, 0, 0),
			},
		}
	})
)

// canvasにスマートフォンの画面の形にマスクされた画像を描画する。
async function drawMaskedAppImage(mainImageAreaElem: MutableRefObject<any>, canvasElem: MutableRefObject<any>, maskedImage: string) {
	const canvas = canvasElem.current;
	// CanvasRenderingContext2Dを取得
	const ctx = canvas.getContext('2d');
	// maskするイメージ
	const mask = new Image();
	// maskされるイメージ
	const bg = new Image();

	// imgのロードをmask, bgの順番に行い両方完了したら描画を開始する。
	await loadImage(mask, './public/iphoneXDisplayFlame_for_canvas.png');
	await loadImage(bg, maskedImage);

	// タブレットの画像のアスペクト比に合わせる為に、mainImageAreaの縦横の値をcanvasのサイズに当てはめる
	const mainImageArea = mainImageAreaElem.current;
	const canvasWidth = mainImageArea.offsetWidth;
	const canvasHeight = mainImageArea.offsetHeight;
	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	// maskされる背景イメージを描画
	ctx.drawImage(bg, 0, 0, canvasWidth, canvasHeight);
	// 合成方法の指定
	ctx.globalCompositeOperation = 'destination-in';
	// 合成するmaskイメージを描画
	ctx.drawImage(mask, 0, 0, canvasWidth, canvasHeight);
}

// imageをロードした時に処理を完了させるPromise関数を返す。
function loadImage(img: HTMLImageElement, src: string): Promise<void> {
	return new Promise((resolve, reject) => {
		img.onload = () => resolve();
		img.onerror = (e) => reject();
		img.src = src;
	})
}

export default function HorizontalSingleDynamicLayout(props) {
	const classes = useStyles();

	const featuredWorkInfo: FeaturedWorkInfo = props.featuredWorkInfo;
	const title: string = featuredWorkInfo.featuredWorkTitle;
	const initialMainImage: string = featuredWorkInfo.featuredWorkImgSrc[0];

	const mainImageAreaRef = React.useRef(null);
	const mainAppImageCanvasRef = React.useRef(null);

	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);
	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		setSelectedMainImage(selectedImageInfo);
	}

	React.useEffect(() => {
		// userAgentがIEの場合にappImageを、clip-pathではなくcanvasで描画する。
		if (isIe) {
			drawMaskedAppImage(mainImageAreaRef, mainAppImageCanvasRef, selectedMainImage);
		}
	})

	return (
		<div className={classes.backgroundArea}>
			<div className={classes.horizontalLayout}>
				<div className={classes.mainImageArea} ref={mainImageAreaRef}>
					<div className={classes.mainImageWrap}>
						<img className={classes.mainImage} src={'./public/iPhoneX.png'} />
						<div className={classes.svgFrameArea}>
							<div className={classes.svgFrameWrap}>
								<svg className={classes.iphoneXFrameSVG} viewBox='0 0 0 0'>
									<clipPath id='iPhoneXFrame'>
										<path d='M143,0H128a4.94,4.94,0,0,0-3,1c-1,1,2,12-14,12H49C33,13,36,2,35,1a4.94,4.94,0,0,0-3-1H17C3,0,0,13,0,15V330.67c0,14.43,15,16,15,16H145s15-1.6,15-16V15C160,13,157,0,143,0Z' />
									</clipPath>
								</svg>
								<svg className={classes.mainAppImage} viewBox='0 0 160 346.7'>
									<image className={classes.clipedAppImage} xlinkHref={selectedMainImage} clipPath='url(#iPhoneXFrame)' />
								</svg>
								<canvas className={classes.mainAppImage} ref={mainAppImageCanvasRef}></canvas>
							</div>
						</div>
					</div>
				</div>
				<div className={classes.imageSelectArea}>
					{
						featuredWorkInfo.featuredWorkImgSrc.map((imageInfo, index) => (
							<div
								className={clsx(classes.imageButton)}
								key={imageInfo}
								onClick={(event) => handleImageSelected(imageInfo, event)}>
								<div className={clsx(classes.expandingBall, (imageInfo === selectedMainImage) && classes.expand)}></div>
								<img className={classes.imageButtonImage} src={imageInfo} />
							</div>
						))}
				</div>
				<div className={classes.titleArea}>
					<FeaturedWorkTitle featuredWorkTitle={title} />
				</div>
			</div >
		</div>
	)
}
