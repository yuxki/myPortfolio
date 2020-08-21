import * as React from 'react';
import { HashRouter as Router, Link, useRouteMatch } from "react-router-dom";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface menuTextToRoute {
	[menuText: string]: string;
}

const textToRouteMap: menuTextToRoute = {
	'Home': '/',
	'About': '/about',
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		primary: {
			fontSize: 44,
			margin: theme.spacing(1, 0),
		},
		root: {
			margin: 0,
			padding: 0,
		},
	}),
);

export default function MenuList(props) {
	const classes = useStyles();
	let match = useRouteMatch();
	return (
			<List classes={{ root: classes.root }}>
				{['Home', 'About'].map((text, index) => (
					<ListItem key={text} classes={{ root: classes.root }}>
						<Link to={textToRouteMap[text]}>
							<div onClick={props.handleDrawerClose ? props.handleDrawerClose : null}>
							<ListItemText primary={text} classes={{ primary: classes.primary }}/>
							</div>
						</Link>
					</ListItem>
				))}
			</List>
	);
}
