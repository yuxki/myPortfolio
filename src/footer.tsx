import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuList from './menuList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footerArea: {
			backgroundColor: '#F2BE22',
			position: 'absolute',
			display: 'flex',
			bottom: 0,
			width: '100%',
			height: '400px',
			justifyContent: 'flex-end',
		},
		menuArea: {
			display: 'inherit',
			paddingRight: theme.spacing(10),
			marginTop: theme.spacing(10),
		},
	}),
)

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.footerArea}>
			<div className={classes.menuArea}>
				<MenuList />
			</div>
		</div>
	)
}
