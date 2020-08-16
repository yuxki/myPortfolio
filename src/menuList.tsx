import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

export default function MenuList() {
	const classes = useStyles();
	return (
		<List classes={{ root: classes.root }}>
			{['Home', 'Works', 'About'].map((text, index) => (
				<ListItem key={text} classes={{ root: classes.root }}>
					<ListItemText primary={text} classes={{ primary: classes.primary }} />
				</ListItem>
			))}
		</List>
	);
}
