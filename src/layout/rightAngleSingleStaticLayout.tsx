import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import ImageIcon from '@material-ui/icons/Image';
import FeaturedWorkTitle from "../featuredWorkTitle"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		rightAngleLayout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
		},
		mainImageArea: {
			display: 'flex',
			width: '583px',
			height: '380px',
			marginRight: theme.spacing(1),
			alignItems: 'center',
			flexDirection:'column',
			[theme.breakpoints.down('xs')]: {
				margin: '0 calc(50% - 50vw)',
				width: '100vw',
				height: 'auto',
			}
		},
		mainImage: {
			width: '583px',
			height: '328px',
			[theme.breakpoints.down('xs')]: {
				width: '100vw',
				height: 'calc(100vw * 0.5625)',
			},
		},
		videocamIconArea:{
			display:'flex',
			width:'100%',
			height: '32px',
			justifyContent:'center',
			alignItems: 'center',
		},
		vidoModeIcon: {
			display:'flex',
		},
		root: {
			color: "#000000",
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
			[theme.breakpoints.down('xs')]: {
				margin: '0 calc(50% - 50vw)',
			},
		},
		squareImageArea: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '249px',
			height: '78px',
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(0, 2),
				justifyContent: 'center',
				width: '100vw',
				height: 'auto',
				margin: theme.spacing(2, 0),
			},
		},
		squareImage: {
			display: 'flex',
			width: '78px',
			height: '78px',
			[theme.breakpoints.down('xs')]: {
				width: '30%',
				maxWidth: '120px',
				height: 'auto',
				margin: theme.spacing(0, 1, 0, 1),
			},
		},
		rectangleImageArea: {
			display: 'flex',
			flexDirection: 'column',
			width: 'auto',
			height: 'auto',
			[theme.breakpoints.down('xs')]: {
				width: '100vw',
				flexDirection: 'row',
				overflowX: 'auto',
			},
		},
		rectangleImage: {
			display: 'flex',
			width: '249px',
			hight: '140',
			marginTop: theme.spacing(1),
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(0, 2, 0, 0),
			},
		},
		titleArea: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
		},
	})
)

export default function RightAngleSingleStaticLayout(props) {
	const classes = useStyles();
	const [isVideoModeOn, setIsVideoModeOn] = React.useState(false);
	function handleModeSwitched() {
		setIsVideoModeOn(!isVideoModeOn);
	}

	const mainImage: string = props.imageInfoSrcList[0];
	const squareImageArray: Array<string> = props.imageInfoSrcList.slice(1, 4);
	const rectangleImageArray: Array<string> = props.imageInfoSrcList.slice(4);

	return (
		<div className={classes.rightAngleLayout}>
			<div className={classes.mainImageArea}>
				<img className={clsx(classes.mainImage, isVideoModeOn && classes.hide)} src={mainImage} />
				<iframe className={clsx(classes.mainImage, classes.hide, isVideoModeOn && classes.appear)} src="https://www.youtube.com/embed/uUPppgbQGow?loop=1&rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
				<div className={classes.videocamIconArea}>
					<IconButton
						edge="start"
						className={classes.vidoModeIcon}
						onClick={handleModeSwitched}
						size="medium"
						classes={{ root: classes.root }}
					>
						{
							isVideoModeOn ? <ImageIcon /> : <VideocamIcon />
						}
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
	)
}
