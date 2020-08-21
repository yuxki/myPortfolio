import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuList from './menuList';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		footerArea: {
			zIndex: -100,
			position: 'fixed',
			bottom: 0,
			backgroundColor: '#F2BE22',
			display: 'flex',
			width: '100%',
			justifyContent: 'flex-end',
		},
		menuArea: {
			display: 'inherit',
			paddingRight: theme.spacing(10),
			marginTop: theme.spacing(10),
		},
	}),
)

export default function Footer(props) {
	const classes = useStyles();

	return (
		<footer className={classes.footerArea}
			onWheel={props.isAnimating
				? null
				: props.isSlideOut ? props.slideTopPageInBywheel : null
			}
			style={props.isSlideOut ? {zIndex:45} : {}}
			>
			<div className={classes.menuArea}>
				<MenuList />
			</div>
		</footer>
	)
}
