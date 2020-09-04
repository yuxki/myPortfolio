import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuList from './menuList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footerArea: {
			display: 'flex',
			justifyContent: 'flex-end',
			width: '100%',
			backgroundColor: theme.palette.primary.main,
		},
		menuArea: {
			display: 'flex',
			padding: theme.spacing(0, 10),
			margin: theme.spacing(5, 0, 19, 0),
			[theme.breakpoints.down('sm')]:{
				padding: theme.spacing(0, 8),
			},
			[theme.breakpoints.down('xs')]:{
				padding: theme.spacing(0, 4),
			}
		},
	}),
)

export default function Footer() {
	const classes = useStyles();

	return (
		<footer className={classes.footerArea}>
			<div className={classes.menuArea}>
				<MenuList />
			</div>
		</footer>
	)
}
