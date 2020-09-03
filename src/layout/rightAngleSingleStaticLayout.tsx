import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import FeaturedWorkTitle from "../featuredWorkTitle"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backgroundArea: {
			display:'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 'calc(100vh + 80px)',
			minHeight: '580px',
			backgroundColor:'#F7F7F7',
			margin: '0 calc(50% - 50vw)',
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
			width: '583px',
			height: '380px',
			marginRight: theme.spacing(1),
			alignItems: 'center',
			flexDirection: 'column',
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
				width: 'calc(100vw * 0.56)',
				maxWidth: '583px',
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
			width: '100%',
			height: '44px',
			justifyContent: 'center',
			alignItems: 'center',
		},
		modeIcon: {
			display: 'flex',
			marginRight:theme.spacing(4),
		},
		root: {
			color: "#F2BE22",
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
				width: '249px',
				height: '140px',
				margin: theme.spacing(0, 0, 1, 0),
			},
			[theme.breakpoints.down('xs')]: {
				width: '217px',
				minWidth:'217px',
				height: '120px',
				minHeight:'120px',
				margin: theme.spacing(0, 2, 0, 0),
			},
		},
		titleArea: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(4, 0, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(1, 0, 0, 0),
			},
		},
	})
)

export default function RightAngleSingleStaticLayout(props) {
	const classes = useStyles();
	const [isVideoModeOn, setIsVideoModeOn] = React.useState(false);
	function handleVideoModeOn() {
		setIsVideoModeOn(true);
	}
	function handleVideoModeOff() {
		setIsVideoModeOn(false);
	}

	const mainImage: string = props.imageInfoSrcList[0];
	const squareImageArray: Array<string> = props.imageInfoSrcList.slice(1, 4);
	const rectangleImageArray: Array<string> = props.imageInfoSrcList.slice(4);

	return (
		<div className={classes.backgroundArea}>
			<div className={classes.rightAngleLayout}>
				<div className={classes.mainImageArea}>
					<img className={clsx(classes.mainImage, isVideoModeOn && classes.hide)} src={mainImage} />
					<iframe className={clsx(classes.mainImage, classes.hide, isVideoModeOn && classes.appear)} src="https://www.youtube.com/embed/uUPppgbQGow?loop=1&rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
					<div className={classes.videocamIconArea}>
						<IconButton
							edge="start"
							className={classes.modeIcon}
							onClick={handleVideoModeOff}
							size="medium"
							classes={{root: clsx(!isVideoModeOn && classes.root)}}
						>
								<ImageIcon />
						</IconButton>
						<IconButton
							edge="start"
							classes={{root: clsx(isVideoModeOn && classes.root)}}
							onClick={handleVideoModeOn}
							size="medium"
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
					<FeaturedWorkTitle featuredWorkTitle={props.featuredWorkTitle} />
				</div>
			</div>
		</div>
	)
}
