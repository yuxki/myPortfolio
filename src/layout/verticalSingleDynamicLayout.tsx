import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FeaturedWorkTitle from "../featuredWorkTitle"

interface FeaturedWorkInfo {
	featuredWorkTitle: string;
	featuredWorkType: string;
	featuredWorkImgSrc: Array<string>;
	featuredWorkButtomMaxWidth: Array<string>;
	featuredWorkImgElem: Array<HTMLImageElement>;
	featuredWorkLayout: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainImageAreaWrap: {
			[theme.breakpoints.down('sm')]: {
				margin: 'auto',
				width: '62%',
				maxWidth: '386px',
			},
			[theme.breakpoints.down('xs')]: {
				margin: 'auto',
				width: '100%',
				maxWidth: '310px',
			},
		},
		mainImageArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				position: 'relative',
				marginBottom: theme.spacing(4),
				paddingTop: '100%',
			},
			[theme.breakpoints.down('xs')]: {
				position: 'relative',
				marginBottom: theme.spacing(4),
				paddingTop: '100%',
			},
		},
		mainImage: {
			display: 'flex',
			width: 'auto',
			height: '274px',
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '100%',
				maxWidth: '386px',
				height: 'auto',
			},
			[theme.breakpoints.down('xs')]: {
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '100%',
				maxWidth: '310px',
				height: 'auto',
			},
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			margin: theme.spacing(2, 0, 2, 0),
			[theme.breakpoints.down('sm')]: {
				flexWrap: 'wrap',
			},
			[theme.breakpoints.down('xs')]: {
				flexDirection: 'column',
			},
		},
		imageSelectRow: {
			display: 'flex',
			flexDirection: 'row',
			[theme.breakpoints.down('xs')]: {
				justifyContent: 'center',
				width: '100%',
			},
		},
		upperRow: {
			[theme.breakpoints.down('sm')]: {
				marginBottom: theme.spacing(2),
			},
			[theme.breakpoints.down('xs')]: {
				marginBottom: theme.spacing(2),
			},
		},
		lowerRow: {

		},
		imageButton: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: theme.spacing(0, 1, 2, 1),
			width: '177px',
			height: '76px',
			border: ' 1px solid #E0E0E0',
			borderRadius: '4px',
			boxSizing: 'border-box',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(0, 2, 0, 2),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(0, 1, 0, 1),
				padding: theme.spacing(1, 2),
			},
		},
		selctedImageButton: {
			border: '2px solid #F2BE22',
		},
		imageButtonImage: {
			display: 'flex',
			height: '55px',
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				height: 'auto',
			},
		},
		titleArea: {
			display: 'flex',
			width: '100%',
			height: 'auto',
			justifyContent: 'center',
		}
	})
)

export default function VerticalSingleDynamicLayout(props) {
	const classes = useStyles();
	const title = props.featuredWorkInfo.featuredWorkTitle;
	const initialMainImage: string = props.featuredWorkInfo.featuredWorkImgSrc[0];
	const featuredWorkInfo: FeaturedWorkInfo = props.featuredWorkInfo;

	const imageButtonInfo = createImageButtonInfo(featuredWorkInfo);
	const upperRowImageButtonInfo: Array<FeaturedWorkInfo> = imageButtonInfo.slice(0, 2);
	const lowerRowImageButtonInfo: Array<FeaturedWorkInfo> = imageButtonInfo.slice(2);

	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);

	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		setSelectedMainImage(selectedImageInfo);
	}

	function createImageButtonInfo(imageInfo: FeaturedWorkInfo) {
		let imageButtonInfo = [];
		imageInfo.featuredWorkImgSrc.forEach((src, index) => {
			imageButtonInfo.push({ imageSrc: src, maxWidth: imageInfo.featuredWorkButtomMaxWidth[index] })
		})
		return imageButtonInfo
	}

	function generateImageButton(imageInfo, index: number) {
		const imageSrc = imageInfo.imageSrc;
		const imageMaxwidth = imageInfo.maxWidth;

		return (
			<div
				className={clsx(classes.imageButton, (imageSrc === selectedMainImage) && classes.selctedImageButton)}
				key={imageSrc}
				onClick={(event) => handleImageSelected(imageSrc, event)}>
				<img className={classes.imageButtonImage} src={imageSrc}
					style={{ maxWidth: imageMaxwidth }}
				/>
			</div>
		)
	}
	return (
		<div>
			<div className={classes.mainImageAreaWrap}>
				<div className={classes.mainImageArea}>
					<img className={classes.mainImage} src={selectedMainImage} />
				</div>
			</div>

			<div className={classes.imageSelectArea}>
				<div className={clsx(classes.imageSelectRow, classes.upperRow)}>
					{
						upperRowImageButtonInfo.map((imageInfo, index) => (
							generateImageButton(imageInfo, index)
						))}
				</div>
				<div className={clsx(classes.imageSelectRow, classes.lowerRow)}>
					{
						lowerRowImageButtonInfo.map((imageInfo, index) => (
							generateImageButton(imageInfo, index)
						))}
				</div>
			</div>

			<div className={classes.titleArea}>
				<FeaturedWorkTitle featuredWorkTitle={title} />
			</div>
		</div>
	)
}
