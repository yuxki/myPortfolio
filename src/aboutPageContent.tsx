import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Header from "./header";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		aboutPageArea: {
			display: 'block',
			position: 'static',
			padding: theme.spacing(15, 10, 8, 10),
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(15, 8, 8, 8),
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(10, 4, 8, 4),
			},
		},
		bodyAboutAtelier: {
			marginTop: theme.spacing(4),
		},
		snsInfoArea: {
			marginTop: theme.spacing(3),
		},
		twitterInfo: {
			marginRight: theme.spacing(4),
		},
		noteInfo: {

		},
		twitterImg: {
			width: '60px',
			height: '60px',
		},
		noteImg: {
			width: '60px',
			height: '60px',
		},
	}),
)

export default function AboutPageContent(props) {
	const classes = useStyles();

	// ローディング画面を表示するか否かのHook
	const [isAboutPageLoading, setIsAboutPageLoading] = React.useState(true);

	function startAboutPageLoading() {
		setIsAboutPageLoading(true);
	}

	function endAboutPageLoading() {
		setIsAboutPageLoading(false);
	}
	const title = 'About';
	const subTitle = 'Atelier Hiroyuki';
	const aboutAtelier = "何かを知る楽しさ、なにかを始める楽しさ、なにかをつくる楽しさ、\nモノづくりで得られる楽しさを知るために活動しています。\nAtelier Hiroyuki は、その活動拠点です。"
	const twitterLink = 'twitter';
	const noteLink = 'note ';
	return (
		<div>
			<Header />
			<div className={classes.aboutPageArea}>
				<Typography variant='h1'>
					{title}
				</Typography>
				<Typography variant='h3'>
					{subTitle}
				</Typography>
				<div className={classes.bodyAboutAtelier}>
					{aboutAtelier.split("\n").map((text, index) => {
						return <Typography variant='body1' key={index}>{text}</Typography>
					})}
				</div>
				<div className={classes.snsInfoArea}>
					<a href="https://twitter.com/hiroyuki31555" className={classes.twitterInfo}>
						<img src="./public/Twitter_Logo_Blue.svg" className={classes.twitterImg} />
					</a>
					<a href="https://note.com/yuxki_atelier" className={classes.noteInfo}>
						<img src="./public/logo_symbol.svg" className={classes.noteImg} />
					</a>
				</div>
			</div>
		</div>
	)
}
