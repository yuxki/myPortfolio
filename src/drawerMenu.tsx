import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import MenuList from './menuList';
import Logo from './logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		drawer: {
			flexShrink: 0,
			width: '100%',
		},
		drawerPaper: {
			width: '100%',
			backgroundColor: theme.palette.primary.main,
		},
		drawerContent: {
			padding: theme.spacing(12, 10),
			[theme.breakpoints.down('sm')]:{
				padding: theme.spacing(12, 8),
			},
			[theme.breakpoints.down('xs')]:{
				padding: theme.spacing(12, 4),
			},
		},
		drawerBody: {
			display: 'flex',
		},
		drawerLeft: {
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		drawerRight: {
			display: 'flex',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
);

export default function DrawerMenu(props) {
	const classes = useStyles();
	const handleDrawerClose = props.handleDrawerClose;
	const open: boolean = props.open;

	return (
		<div>
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='right'
				open={open}
				transitionDuration={{ appear: 1000, enter: 500, exit: 500 }}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerContent}>
					<div className={classes.drawerBody}>
						<div className={classes.drawerLeft}>
						</div>
						<div className={classes.drawerRight}>
							<MenuList handleDrawerClose={handleDrawerClose} />
						</div>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
