import * as React from 'react';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		h2: {
			fontWeight: 'lighter',
			display: 'flex',
			fontSize: 47,
			margin: theme.spacing(1,0),
			textAlign: 'center'
		},
		h6: {
			fontWeight: 'lighter',
			display: 'flex',
			fontSize: 12,
			textAlign: 'center'
		},
		billboard: {
			width: '100%',
			height: '100%',
		},
		billboardContent: {
			display: 'flex',
			flexDirection: 'column',
			padding: theme.spacing(18, 10, 0, 10),
			justifyContent: 'center',
			alignItems: 'center',
		}
	}),
)

export default function Billboard() {
	const classes = useStyles();

	return (
		<div className={classes.billboard}>
			<div className={classes.billboardContent}>
				<img src={'logo.png'} style={{ display: 'flex', width: 78, height: 89 }} />
				<Typography variant="h2" classes={{ h2: classes.h2 }}>
					Atelier Hiroyuki
				</Typography>
				<Typography variant="h6" classes={{ h6: classes.h6 }}>
					作れるを、楽しくするために
				</Typography>
			</div>
		</div>
	)
}
