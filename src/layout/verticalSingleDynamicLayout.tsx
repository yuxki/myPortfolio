import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import FeaturedWorkTitle from "../featuredWorkTitle"

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		mainImageArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			marginBottom: theme.spacing(2),
		},
		mainImage: {
			display: 'flex',
			width: 'auto',
			height: '274px',
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			width: '100%',
			height: 'auto',
			margin: theme.spacing(2, 0, 2, 0),
		},
		imageButton: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			margin: theme.spacing(0, 2, 2, 2),
			width: '177px',
			height: '76px',
			border: ' 1px solid #E0E0E0',
			borderRadius: '4px',
			boxSizing: 'border-box',
		},
		selctedImageButton: {
			border: '2px solid #F2BE22',
		},
		imageButtonImage: {
			display: 'flex',
			height: '55px',
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

	const initialMainImage = props.imageInfoList[0];
	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);

	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		console.log(typeof event);
		setSelectedMainImage(selectedImageInfo);
	}

	return (
		<div>
			<div className={classes.mainImageArea}>
				<img className={classes.mainImage} src={selectedMainImage} />
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
