import * as React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		primary: {
			fontSize: 44,
			margin: theme.spacing(1,0),
		},
		h2: {
			fontWeight: 'lighter',
			display: 'flex',
			fontSize: 47,
			margin: theme.spacing(1,0),
			textAlign: 'center'
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
			flexDirection: 'column',
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
							<List>
								{['Home', 'Works', 'About'].map((text, index) => (
									<ListItem>
										<ListItemText primary={text} classes={{ primary: classes.primary }} />
									</ListItem>
								))}
							</List>
						</div>
						<div className={classes.drawerRight}>
							<img src={'logo.png'} style={{ display: 'flex', width: 78, height: 89 }} />
							<Typography variant="h2" classes={{ h2: classes.h2 }}>
								Atelier Hiroyuki
							</Typography>
						</div>
					</div>
				</div>
			</Drawer>
		</div>
	);
}
