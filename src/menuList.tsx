import * as React from 'react';
import { HashRouter as Router, Link, useRouteMatch, useLocation } from "react-router-dom";
import { makeStyles, useTheme, Theme, createStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TopPage from "./topPage";

interface menuTextToRoute {
	[menuText: string]: string;
}

const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				a: {
					color: "#000000",
					textDecoration: 'none',
				},
			},
		},
	},
})

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
	const textToRouteMap: menuTextToRoute = {
		'Home': '/',
		'About': '/about',
	}

	function handleClickLink() {
		if (props.handleDrawerClose) props.handleDrawerClose();
		if (props.resetState) props.resetState();
	}

	return (
		<List classes={{ root: classes.root }}>
		<ThemeProvider theme={theme}>
			<CssBaseline />
		</ThemeProvider>
			{['Home', 'About'].map((text, index) => (
				<ListItem key={text} classes={{ root: classes.root }}>
					<Link to={textToRouteMap[text]}>
						<div onClick={handleClickLink}>
							<ListItemText primary={text} classes={{ primary: classes.primary }} />
						</div>
					</Link>
				</ListItem>
			))}
		</List>
	);
}
