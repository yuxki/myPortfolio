import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Header from './header';
import SnsIconLink from './SnsIconLink';

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
			display: 'flex',
			flexDirection: 'row',
			marginTop: theme.spacing(3),
		},
		snsIcon: {
			display: 'flex',
		},
		snsIconMargin: {
			marginRight: theme.spacing(4),
		},
	}),
)

export default function AboutPageContent(props) {
	const classes = useStyles();

	const title = 'About';
	const subTitle = 'Atelier Hiroyuki';
	const aboutAtelier = '何かを知る楽しさ、なにかを始める楽しさ、なにかをつくる楽しさ、\nモノづくりで得られる楽しさを知るために活動しています。\nAtelier Hiroyuki は、その活動拠点です。'
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
					{aboutAtelier.split('\n').map((text, index) => {
						return <Typography variant='body1' key={index}>{text}</Typography>
					})}
				</div>
				<div className={classes.snsInfoArea}>
					<div className={clsx(classes.snsIconMargin, classes.snsIcon)}>
						<SnsIconLink
							sns='twitter'
							accountName='hiroyuki31555'
						/>
					</div>
					<div className={classes.snsIcon}>
						<SnsIconLink
							sns='note'
							accountName='yuxki_atelier'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}
