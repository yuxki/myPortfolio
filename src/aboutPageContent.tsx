import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Header from "./header";
import Footer from "./footer";
import Typography from '@material-ui/core/Typography';
import PageLoading from "./pageLoading";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		aboutPageArea: {
			display: 'block',
			position: 'static',
			paddingTop: theme.spacing(15),
			margin: theme.spacing(0, 10, 8, 10),
		},
		bodyAboutAtelier: {
			marginTop: theme.spacing(4),
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

	const aboutAtelier = "何かを知る楽しさ、なにかを始める楽しさ、なにかをつくる楽しさ、\nモノづくりで得られる楽しさを知るために活動しています。\nAtelier Hiroyuki は、その活動拠点です。"
	return (
		<div>
			<Header />
			<div className={classes.aboutPageArea}>
				<Typography variant='h1'>
					About
			</Typography>
				<Typography variant='h3'>
					Atelier Hiroyuki
			</Typography>
				<div className={classes.bodyAboutAtelier}>
					{aboutAtelier.split("\n").map((text, index) => {
						return <Typography variant='body1' key={index}>{text}</Typography>
					})}
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	)
}
