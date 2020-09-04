import * as React from 'react';
import MenuButton from './menuButton';
import DrawerMenu from './drawerMenu';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			display: 'flex',
			position: 'fixed',
			justifyContent: 'flex-end',
			zIndex: 100,
			width: '100%',
			height: '96px',
			boxSizing: 'border-box',
			padding: theme.spacing(12, 10, 0, 10),
			pointerEvents: 'none',
			[theme.breakpoints.down('sm')]: {
				padding: theme.spacing(8, 8, 0, 8),
			},
			[theme.breakpoints.down('xs')]: {
				padding: theme.spacing(8, 4, 0, 4),
			},
		},
		headerContent: {
			display: 'flex',
		},
		menuButtonArea: {
			display: 'flex',
			zIndex: 1500,
			cursor: 'pointer',
			pointerEvents: 'auto',
		},
	}),
);

export default function Header() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<header className={classes.header}>
			<div className={classes.headerContent}>
				<div className={classes.menuButtonArea}>
					<MenuButton
						onClick={open ? handleDrawerClose : handleDrawerOpen}
						open={open}
					/>
				</div>
			</div>
			<DrawerMenu
				open={open}
				handleDrawerClose={handleDrawerClose} />
		</header>
	)
}
