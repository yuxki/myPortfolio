import * as React from 'react';
import Billboard from "./billboard";
import ContentChange from "./contentChange";
import Nav from "./nav"
import FeaturedWork from "./featuredWork";
import WorkTitle from "./workTitle";
import Footer from "./footer";
import NavUpward from './navUpward';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		staticArea: {
			position: 'static',
		},
		topPageArea: {
			display: 'block',
			position: 'relative',
			height: '458px',
			margin: theme.spacing(0, 10),
		},
		footerNavUpward: {
			position:'absolute',
			top:0,
			right: theme.spacing(24),
		}
	}),
);

export default function TopPage() {
	const classes = useStyles();

	return (
		<div className={classes.staticArea}>
			<div className={classes.topPageArea}>
				{/*<Billboard />*/}
				{/*<FeaturedWork />
				<WorkTitle />
				<Nav />*/}
				<div className={classes.footerNavUpward}>
					<NavUpward />
				</div>
			</div>
			{/*<ContentChange />*/}
			<Footer />
		</div>
	)
}
