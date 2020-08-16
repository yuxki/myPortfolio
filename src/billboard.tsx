import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Logo from './logo';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		billboardContent: {
			position: 'absolute',
			top : theme.spacing(13),
			left:'50%',
			transform: 'translateX(-50%)',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
		},
		h6: {
			fontWeight: 'lighter',
			display: 'inherit',
			fontSize: 12,
			textAlign: 'center',
		},
	}),
)

export default function Billboard() {
	const classes = useStyles();

	return (
			<div className={classes.billboardContent}>
				<Logo />
				<Typography variant="h6" classes={{ h6: classes.h6 }}>
					作れるを、楽しくするために
				</Typography>
			</div>
	)
}
