import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import FeaturedWorkTitle from '../featuredWorkTitle';
import { FeaturedWorkInfo } from 'featuredWork';

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
		rightAngleLayout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			alignItems: 'center',
			flexWrap: 'wrap',
		},
		mainImageArea: {
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column',
			width: '583px',
			height: '380px',
			marginRight: theme.spacing(1),
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				height: 'auto',
			},
			[theme.breakpoints.down('xs')]: {
				margin: '0 calc(50% - 50vw)',
				width: '100vw',
				height: 'auto',
			}
		},
		mainImage: {
			width: '583px',
			height: '328px',
			[theme.breakpoints.down('sm')]: {
				// 画面の横幅の56％
				width: 'calc(100vw * 0.56)',
				maxWidth: '583px',
				// 1920×1080の縦割合が0.5625のため、0.5625を乗算する
				height: 'calc(100vw * 0.56 * 0.5625)',
			},
			[theme.breakpoints.down('xs')]: {
				width: '100vw',
				maxWidth: '599px',
				height: 'calc(100vw * 0.5625)',
			},
		},
		videocamIconArea: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			height: theme.spacing(6),
		},
		movingBall: {
			display: 'flex',
			width: '12px',
			height: '12px',
			marginRight: '-8px',
			borderRadius: '50%',
			backgroundColor: 'rgba(242, 190, 34, 0.5)',
			transitionDuration: '0.3s',
			transitionTimingFunction: 'ease-out',
		},
		moveRightSide: {
			transform: 'translateX(74px)',
		},
		modeIcon: {
			display: 'flex',
		},
		modeIconMargin: {
			marginRight: theme.spacing(3),
		},
		root: {
			color: theme.palette.primary.main,
		},
		hide: {
			display: 'none',
		},
		appear: {
			display: 'flex',
		},
		subImageArea: {
			display: 'flex',
			flexDirection: 'column',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'row',
				justifyContent: 'center',
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
				justifyContent: 'flex-start',
				margin: '0 calc(50% - 50vw)',
			},
		},
		squareImageArea: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '249px',
			height: '78px',
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'column',
				width: '90px',
				height: '288px',
				margin: theme.spacing(0, 4, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'row',
				padding: theme.spacing(0, 2),
				justifyContent: 'center',
				width: '100vw',
				height: 'auto',
				margin: theme.spacing(0, 0, 2, 0),
			},
		},
		squareImage: {
			display: 'flex',
			width: '78px',
			height: '78px',
			[theme.breakpoints.down('sm')]: {
				width: '90px',
				height: '90px',
			},
			[theme.breakpoints.down('xs')]: {
				width: '30vw',
				maxWidth: '90px',
				height: '30vw',
				maxHeight: '90px',
				margin: theme.spacing(0, 1, 0, 1),
			},
		},
		rectangleImageArea: {
			display: 'flex',
			flexDirection: 'column',
			width: 'auto',
			height: 'auto',
			[theme.breakpoints.down('sm')]: {
				// mdと同じスタイル
			},
			[theme.breakpoints.down('xs')]: {
				width: '100vw',
				flexDirection: 'row',
				overflowX: 'auto',
				'-ms-overflowX': 'scroll',
			},
		},
		rectangleImage: {
			display: 'flex',
			width: '249px',
			height: '140px',
			margin: theme.spacing(1, 0, 0, 0),
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(0, 0, 1, 0),
			},
			[theme.breakpoints.down('xs')]: {
				width: '217px',
				minWidth: '217px',
				height: '120px',
				minHeight: '120px',
				margin: theme.spacing(0, 2, 0, 0),
			},
		},
		titleArea: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(3, 0, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(1, 0, 0, 0),
			},
		},
	})
)

export default function RightAngleSingleStaticLayout(props) {
	const classes = useStyles();
	const featuredWorkInfo: FeaturedWorkInfo = props.featuredWorkInfo;
	const title: string = featuredWorkInfo.featuredWorkTitle;

	// 配列の一番最初の画像を、mainImageとして取得
	const mainImage: string = featuredWorkInfo.featuredWorkImgSrc[0];
	const squareImageArray: Array<string> = featuredWorkInfo.featuredWorkImgSrc.slice(1, 4);
	const rectangleImageArray: Array<string> = featuredWorkInfo.featuredWorkImgSrc.slice(4);

	const [isVideoModeOn, setIsVideoModeOn] = React.useState(false);
	function handleVideoModeOn() {
		setIsVideoModeOn(true);
	}
	function handleVideoModeOff() {
		setIsVideoModeOn(false);
	}

	return (
		<div className={classes.backgroundArea}>
			<div className={classes.rightAngleLayout}>
				<div className={classes.mainImageArea}>
					<img className={clsx(classes.mainImage, isVideoModeOn && classes.hide)} src={mainImage} />
					<iframe className={clsx(classes.mainImage, classes.hide, isVideoModeOn && classes.appear)} src='https://www.youtube.com/embed/uUPppgbQGow?loop=1&rel=0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' frameBorder='0'></iframe>
					<div className={classes.videocamIconArea}>
						<div className={clsx(
							classes.movingBall,
							isVideoModeOn && classes.moveRightSide,
						)
						}></div>
						<IconButton
							className={clsx(classes.modeIcon, classes.modeIconMargin)}
							onClick={handleVideoModeOff}
							classes={{ root: clsx(!isVideoModeOn && classes.root) }}
							size='medium'
						>
							<ImageIcon />
						</IconButton>
						<IconButton
							className={classes.modeIcon}
							classes={{ root: clsx(isVideoModeOn && classes.root) }}
							onClick={handleVideoModeOn}
							size='medium'
						>
							<VideocamIcon />
						</IconButton>
					</div>
				</div>
				<div className={classes.subImageArea}>
					<div className={classes.squareImageArea}>
						{
							squareImageArray.map((imageInfo, index) => (
								<img className={classes.squareImage} key={imageInfo} src={imageInfo} />
							))
						}
					</div>
					<div className={classes.rectangleImageArea}>
						{
							rectangleImageArray.map((imageInfo, index) => (
								<img className={classes.rectangleImage} key={imageInfo} src={imageInfo} />
							))
						}
					</div>
				</div>
				<div className={classes.titleArea}>
					<FeaturedWorkTitle featuredWorkTitle={title} />
				</div>
			</div>
		</div>
	)
}
