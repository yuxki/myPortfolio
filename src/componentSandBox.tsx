import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import MenuButton from "./MenuButton";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		sandBoxArea: {
			position: 'relative',
			height: '100vh',
			width: '100vw',
			backgroundColor: '#FFFFFF',
		},
		menuButtonArea: {
			position: 'absolute',
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
		}
	})
)

export default function ComponentSandBox() {
	const classes = useStyles()
	return (
		<div className={classes.sandBoxArea}>
			<div className={classes.menuButtonArea}>
				<MenuButton />
			</div>
		</div>
	)
}
