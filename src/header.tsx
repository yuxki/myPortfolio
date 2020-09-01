import * as React from 'react';
import MenuButton from "./menuButton";
import DrawerMenu from "./drawerMenu";

import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			boxSizing: 'border-box',
			position: 'fixed',
			display: 'flex',
			zIndex: 100,
			width: '100%',
			height: '96px',
			padding: theme.spacing(12, 10, 0, 10),
			justifyContent: 'flex-end',
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
			// width: '100%',
		},
		menuButtonArea: {
			cursor: 'pointer',
			pointerEvents: 'auto',
			display: 'flex',
			zIndex: 1500,
		},
	}),
);

export default function Header(props) {
	const resetState = props.resetState ? props.resetState : null;
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
				resetState={resetState}
				open={open}
				handleDrawerClose={handleDrawerClose} />
		</header>
	)
}
