import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FeaturedWorkTitle from '../featuredWorkTitle';
import { FeaturedWorkInfo, ImageButtonInfo } from 'featuredWork';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		backgroundArea: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			height: 'calc(100vh + 80px)',
			minHeight: '580px',
		},
		verticalLayout: {
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
		},
		mainImageAreaWrap: {
			[theme.breakpoints.down('sm')]: {
				width: '62%',
				maxWidth: '386px',
				margin: '0',
			},
			[theme.breakpoints.down('xs')]: {
				width: '100%',
				maxWidth: '310px',
			},
		},
		mainImageArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			marginBottom: theme.spacing(2),
			[theme.breakpoints.down('sm')]: {
				position: 'relative',
				paddingTop: '100%',
				marginBottom: theme.spacing(4),
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じロジックのスタイル
			},
		},
		// mainImageを切り替える時に、画像の縦幅の変化でスクリーンの幅変化しないように、固定幅を持つエリアを置いておく
		consistentMainImageArea: {
			[theme.breakpoints.down('sm')]: {
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
				width: '100%',
				height: '100%',
			},
			[theme.breakpoints.down('xs')]: {
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
				height: 'auto',
			},
			[theme.breakpoints.down('xs')]: {
				// smと同じロジックのポジション
			},
		},
		imageSelectArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			margin: theme.spacing(2, 0, 0, 0),
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
			width: '177px',
			height: '76px',
			boxSizing: 'border-box',
			margin: theme.spacing(0, 1, 2, 1),
			border: ' 1px solid #E0E0E0',
			borderRadius: '4px',
			cursor: 'pointer',
			pointerEvents: 'auto',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(0, 2, 0, 2),
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(1, 2),
				margin: theme.spacing(0, 1, 0, 1),
			},
		},
		selctedImageButton: {
			border: '2px solid',
			borderColor: theme.palette.primary.main,
		},
		imageButtonImage: {
			width: '100%',
			height: 'auto',
		},
		titleArea: {
			display: 'flex',
			justifyContent: 'center',
			width: '100%',
			height: 'auto',
			[theme.breakpoints.down('sm')]: {
				margin: theme.spacing(3, 0, 0, 0),
			},
			[theme.breakpoints.down('xs')]: {
				margin: theme.spacing(1, 0, 0, 0),
			},
		}
	})
)

// FeaturedWorkInfo型のデータを元に、ImageButtonInfo型の連想配列を作成する
function createImageButtonInfo(imageInfo: FeaturedWorkInfo): Array<ImageButtonInfo> {
	let imageButtonInfoArray: Array<ImageButtonInfo> = [];

	imageInfo.featuredWorkImgSrc.forEach((src, index) => {
		let imageButtonInfo: ImageButtonInfo = { imageSrc: 'empty', maxWidth: 'empty' }
		imageButtonInfo.imageSrc = src;
		imageButtonInfo.maxWidth = imageInfo.featuredWorkButtomMaxWidth[index];

		imageButtonInfoArray.push(imageButtonInfo)
	})
	return imageButtonInfoArray
}

export default function VerticalSingleDynamicLayout(props) {
	const classes = useStyles();

	const featuredWorkInfo: FeaturedWorkInfo = props.featuredWorkInfo;

	// 配列の一番最初の画像を、最初に表示する画像として取得
	const initialMainImage: string = featuredWorkInfo.featuredWorkImgSrc[0];
	const title: string = featuredWorkInfo.featuredWorkTitle;

	// 選択されたメインの画像の状態を保存するstateのHook
	const [selectedMainImage, setSelectedMainImage] = React.useState(initialMainImage);

	// 選択されたイメージを、mainImageとしてsetする
	function handleImageSelected(selectedImageInfo: string, event) {
		event.preventDefault();
		setSelectedMainImage(selectedImageInfo);
	}

	// ImageButtonInfo型の連想配列を作成し、上下2段に分かれたimageButtonAreaのために、データを2つに分ける。
	const imageButtonInfoArray: Array<ImageButtonInfo> = createImageButtonInfo(featuredWorkInfo);
	const upperRowImageButtonInfoArray: Array<ImageButtonInfo> = imageButtonInfoArray.slice(0, 2);
	const lowerRowImageButtonInfoArray: Array<ImageButtonInfo> = imageButtonInfoArray.slice(2);

	// imageButtonの関数コンポーネント
	function ImageButton(props) {
		const imageButtonInfo: ImageButtonInfo = props.imageButtonInfo;
		const imageSrc: string = imageButtonInfo.imageSrc;
		const imageMaxwidth: string = imageButtonInfo.maxWidth;

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
		<div className={classes.backgroundArea}>
			<div className={classes.verticalLayout}>
				<div className={classes.mainImageAreaWrap}>
					<div className={classes.mainImageArea}>
						<div className={classes.consistentMainImageArea}></div>
						<img className={classes.mainImage} src={selectedMainImage} />
					</div>
				</div>
				<div className={classes.imageSelectArea}>
					<div className={clsx(classes.imageSelectRow, classes.upperRow)}>
						{
							upperRowImageButtonInfoArray.map((imageInfo, index) => (
							<ImageButton imageButtonInfo={imageInfo}/>
							))}
					</div>
					<div className={clsx(classes.imageSelectRow, classes.lowerRow)}>
						{
							lowerRowImageButtonInfoArray.map((imageInfo, index) => (
								<ImageButton imageButtonInfo={imageInfo}/>
							))}
					</div>
				</div>
				<div className={classes.titleArea}>
					<FeaturedWorkTitle featuredWorkTitle={title} />
				</div>
			</div>
		</div>
	)
}
