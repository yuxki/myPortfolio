import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FeaturedWorkTitle from "../featuredWorkTitle"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		horizontalLayout: {
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			flexWrap: 'wrap',
		},
		mainImageArea: {
			position: 'relative',
			display: 'flex',
			flexDirection: 'column-reverse',
			width: '184px',
			height: '368px',
			margin: theme.spacing(0, 4, 2, 0),
			[theme.breakpoints.down('sm')]: {
				flexDirection: 'row',
				justifyContent: 'center',
				width: '184px',
				height: '368px',
				margin: theme.spacing(0, 0, 5, 0),
			},
			[theme.breakpoints.down('xs')]: {
				// flexDirectionとjustifyContentはsmと同じスロジックのスタイル
				width: '151px',
				height: '302px',
				margin: theme.spacing(0, 0, 3, 0),
			},
		},
		mainImageWrap: {
			position: 'relative',
			display: 'flex',
		},
		mainImage: {
			display: 'flex',
			width: '184px',
			height: '368px',
			[theme.breakpoints.down('sm')]: {
				width: '184px',
				height: '368px',
			},
			[theme.breakpoints.down('xs')]: {
				width: '151px',
				height: '302px',
			},
		},
		svgFrameArea: {
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				padding: '6% 6% 6% 6%',
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じスロジックのスタイル
			},
		},
		svgFrameWrap: {
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				width: '88%',
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じスロジックのスタイル
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
				height: 'auto',
				top: 0,
				left: 0,
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じスロジックのスタイル
			},
		},
		clipedAppImage: {
			width: '160px',
			height: '346.7px',
			[theme.breakpoints.down('sm')]: {
				width: '100%',
				height: 'auto',
				top: 0,
				left: 0,
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じスロジックのスタイル
			},
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'flex-start',
			flexWrap: 'wrap',
			width: '650px',
			height: 'auto',
			margin: theme.spacing(2, 0, 0, 0),
			paddingTop: theme.spacing(3),
			[theme.breakpoints.down('sm')]: {
				margin: '0 calc(50% - 50vw)',
				width: '100vw',
				flexWrap: 'nowrap',
				overflowX: 'auto',
				padding: '0px',
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じスロジックのスタイル
			},
		},
		imageButton: {
			display: 'flex',
			margin: theme.spacing(0, 4, 2, 0),
			width: 'auto',
			height: 'auto',
			border: ' 1px solid #D8D8D8',
			boxSizing: 'border-box',
			[theme.breakpoints.down('sm')]: {
				boxShadow: '0px 3px 6px rgb(0,0,0,0.16)',
				margin: theme.spacing(0, 5, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(0, 3, 0, 0),
			},
		},
		selctedImageButton: {
			// border: '2px solid #F2BE22',
		},
		imageButtonImage: {
			display: 'flex',
			width: '73px',
			height: '156px',
			[theme.breakpoints.down('sm')]: {
				width: '73px',
				height: '156px',
			},
			[theme.breakpoints.down('xs')]: {
				width: '60px',
				height: '130px',
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
				margin: theme.spacing(2, 0, 0, 0),
			}
		}
	})
)

export default function HorizontalSingleDynamicLayout(props) {
	const classes = useStyles();

	const initialMainImage = props.imageInfoSrcList[0];
	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);

	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		setSelectedMainImage(selectedImageInfo);
	}

	return (
		<div className={classes.horizontalLayout}>
			<div className={classes.mainImageArea}>
				<div className={classes.mainImageWrap}>
					<img className={classes.mainImage} src={'iPhoneX.png'} />
					<div className={classes.svgFrameArea}>
						<div className={classes.svgFrameWrap}>
							<svg className={classes.iphoneXFrameSVG} viewBox="0 0 0 0">
								<clipPath id="iPhoneXFrame">
									<path d="M143,0H128a4.94,4.94,0,0,0-3,1c-1,1,2,12-14,12H49C33,13,36,2,35,1a4.94,4.94,0,0,0-3-1H17C3,0,0,13,0,15V330.67c0,14.43,15,16,15,16H145s15-1.6,15-16V15C160,13,157,0,143,0Z" />
								</clipPath>
							</svg>
							<svg className={classes.mainAppImage} viewBox="0 0 160 346.7">
								<image className={classes.clipedAppImage} xlinkHref={selectedMainImage} clipPath="url(#iPhoneXFrame)" />
							</svg>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.imageSelectArea}>
				{
					props.imageInfoSrcList.map((imageInfo, index) => (
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
		</div >
	)
}
