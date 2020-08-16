import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import MenuList from './menuList';
import Logo from './logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
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

export default function DrawerMenu() {
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
			<IconButton
				color="inherit"
				aria-label="open drawer"
				edge="end"
				onClick={handleDrawerOpen}
				className={clsx(open && classes.hide)}
			>
				<MenuIcon />
			</IconButton>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerContent}>
					<div className={classes.drawerHeader}>
						<IconButton onClick={handleDrawerClose}>
							<CloseIcon />
						</IconButton>
					</div>
					<div className={classes.drawerBody}>
						<div className={classes.drawerLeft}>
						<MenuList />
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
