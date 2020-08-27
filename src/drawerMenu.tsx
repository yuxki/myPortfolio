import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuButton from "./menuButton";
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MenuList from './menuList';
import Logo from './logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		menuButtonArea: {
			position: 'fixed',
			zIndex: 1500,
		},
		hide: {
			display: 'none',
		},
		drawer: {
			width: '100%',
			flexShrink: 0,
		},
		drawerPaper: {
			width: '100%',
			backgroundColor: '#F2BE22',
		},
		drawerContent: {
			padding: theme.spacing(12, 10),
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-end',
		},
		drawerBody: {
			display: 'flex',
		},
		drawerLeft: {
			display: 'inherit',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
		drawerRight: {
			display: 'inherit',
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
		},
	}),
);

export default function DrawerMenu(props) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<div className={classes.menuButtonArea}>
				<MenuButton
					onClick={open ? handleDrawerClose : handleDrawerOpen}
					open={open}
				/>
			</div>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				transitionDuration={{ appear: 1000, enter: 500, exit: 500 }}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerContent}>
					<div className={classes.drawerHeader}>
					</div>
					<div className={classes.drawerBody}>
						<div className={classes.drawerLeft}>
							<MenuList
								handleDrawerClose={handleDrawerClose}
								resetState={props.resetState}
							/>
						</div>
						<div className={classes.drawerRight}>
							<Logo />
						</div>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
