import * as React from 'react';
import { HashRouter as Router, Link, useRouteMatch, useLocation } from 'react-router-dom';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TopPage from './topPage';
import {textToRouteMap, linkMenu} from './data/routeData';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		primary: {
			margin: theme.spacing(1, 0),
			fontSize: 44,
			cursor: 'pointer',
			pointerEvents: 'auto',
		},
		root: {
			margin: 0,
			padding: 0,
		},
	}),
);

export default function MenuList(props) {
	const classes = useStyles();

	function handleClickLink() {
		if (props.handleDrawerClose) props.handleDrawerClose();
	}

	return (
		<List classes={{ root: classes.root }}>
			{linkMenu.map((text, index) => (
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
