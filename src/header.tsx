import * as React from 'react';
import DrawerMenu from "./drawerMenu";
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		header: {
			position:'fixed',
			zIndex:100,
			width: '100%',
			height: theme.spacing(15),
			marginBottom : theme.spacing(5),
		},
		headerContent: {
			display:'flex',
			padding: theme.spacing(12, 10, 0, 10),
			alignItems:'center',
			justifyContent: 'flex-end',
		},
	}),
);

export default function Header(props) {
	const classes = useStyles();
	const resetState = props.resetState ? props.resetState : null;
	return (
		<header className={classes.header}>
			<div className={classes.headerContent}>
				<DrawerMenu resetState={props.resetState}/>
			</div>
		</header>
	)
}
