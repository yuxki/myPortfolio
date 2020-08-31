import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuList from './menuList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footerArea: {
			backgroundColor: '#F2BE22',
			display: 'flex',
			width: '100%',
			justifyContent: 'flex-end',
		},
		menuArea: {
			display: 'inherit',
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

export default function Footer(props) {
	const classes = useStyles();

	return (
		<footer className={classes.footerArea}>
			<div className={classes.menuArea}>
				<MenuList resetState={props.resetState} />
			</div>
		</footer>
	)
}
