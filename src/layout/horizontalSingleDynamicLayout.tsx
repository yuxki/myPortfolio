import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FeaturedWorkTitle from "../featuredWorkTitle"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		horizontalLayout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
		},
		mainImageArea: {
			position:'relative',
			display: 'flex',
			flexDirection: 'column-reverse',
			width: '184px',
			height: 'auto',
			margin: theme.spacing(0, 4, 2, 0),
		},
		mainImage: {
			display: 'flex',
			width: '184px',
			height: 'auto',
		},
		mainAppImage: {
			position:'absolute',
			left:'12px',
			bottom:'11px',
			width: '160px',
			height: '346.7px',
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
			width: '650px',
			height: 'auto',
			margin: theme.spacing(2, 0, 0, 0),
			paddingTop: theme.spacing(3),
		},
		imageButton: {
			display: 'flex',
			margin: theme.spacing(0, 4, 2, 0),
			width: 'auto',
			height: 'auto',
			border: ' 1px solid #D8D8D8',
			boxSizing: 'border-box',
		},
		selctedImageButton: {
			// border: '2px solid #F2BE22',
		},
		imageButtonImage: {
			display: 'flex',
			width: '73px',
			height: 'auto',
		},
		titleArea: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
		}
	})
)

export default function HorizontalSingleDynamicLayout(props) {
	const classes = useStyles();

	const initialMainImage = props.imageInfoList[0];
	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);

	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		console.log(typeof event);
		setSelectedMainImage(selectedImageInfo);
	}

	return (
		<div className={classes.horizontalLayout}>
			<div className={classes.mainImageArea}>
				<img className={classes.mainImage} src={'iPhoneX.png'} />
				<svg width='0px' height='0px' viewBox="0 0 0 0">
					<clipPath id="iPhoneXFlame">
						<path d="M143,0H128a4.94,4.94,0,0,0-3,1c-1,1,2,12-14,12H49C33,13,36,2,35,1a4.94,4.94,0,0,0-3-1H17C3,0,0,13,0,15V330.67c0,14.43,15,16,15,16H145s15-1.6,15-16V15C160,13,157,0,143,0Z" />
					</clipPath>
				</svg>
				<svg className={classes.mainAppImage} viewBox="0 0 160 346.7">
					<image width='160px' height='346.7' xlinkHref={selectedMainImage} clipPath="url(#iPhoneXFlame)" />
				</svg>
			</div>
			<div className={classes.imageSelectArea}>
				{
					props.imageInfoList.map((imageInfo, index) => (
						<div
							className={clsx(classes.imageButton, (imageInfo === selectedMainImage) && classes.selctedImageButton)}
							key={imageInfo}
							onClick={(event) => handleImageSelected(imageInfo, event)}>
							<img className={classes.imageButtonImage} src={imageInfo} />
						</div>
					))}
			</div>
			<div className={classes.titleArea}>
				<FeaturedWorkTitle featuredWorkTitle={props.featuredWorkTitle} />
			</div>
		</div>
	)
}