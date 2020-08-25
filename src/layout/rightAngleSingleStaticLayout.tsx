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
		},
		mainImageFrame: {
			position: 'relative',
			display: 'flex',
			width: '583px',
			height: '328px',
		},
		mainImage: {
			width: '583px',
			height: '328px',
		},
		vidoModeIcon: {
			position: 'absolute',
			bottom: theme.spacing(5),
			left: theme.spacing(4),
		},
		root: {
			color:"#FFFFFF",
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
		},
		squareImageArea: {
			display: 'flex',
			justifyContent: 'space-between',
			width: '249px',
			height: '78px',
		},
		squareImage: {
			display: 'flex',
			width: '78px',
			height: '78px',
		},
		rectangleImageArea: {
			display: 'flex',
			flexDirection: 'column',
			width: 'auto',
			height: 'auto',
		},
		rectangleImage: {
			display: 'flex',
			width: '249px',
			hight: '140',
			marginTop: theme.spacing(1),
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

	const mainImage: string = props.imageInfoList[0];
	const squareImageArray: Array<string> = props.imageInfoList.slice(1, 4);
	console.log(squareImageArray);
	const rectangleImageArray: Array<string> = props.imageInfoList.slice(4);

	return (
		<div className={classes.rightAngleLayout}>
			<div className={classes.mainImageArea}>
				<div className={classes.mainImageFrame}>
					<IconButton
						edge="start"
						className={classes.vidoModeIcon}
						onClick={handleModeSwitched}
						size="medium"
						classes={{root:classes.root}}
					>
					{
						isVideoModeOn ? <ImageIcon /> : <VideocamIcon />
					}
					</IconButton>
					<img className={clsx(classes.mainImage, isVideoModeOn && classes.hide)} src={mainImage} />
					<iframe className={clsx(classes.mainImage, classes.hide, isVideoModeOn && classes.appear)} src="https://www.youtube.com/embed/uUPppgbQGow?loop=1&rel=0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder="0"></iframe>
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
