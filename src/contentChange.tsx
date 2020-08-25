import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		contentChange: {
			display: 'flex',
			// width: '270px',
			// height: '53px',
			position: 'absolute',
			bottom: theme.spacing(3),
			left: '50%',
			transform: 'translateX(-50%)',
			justifyContent: 'center',
			flexDirection: 'column',
		},
		h4: {
			display: 'flex',
			fontSize: '22px',
			color: '#F2BE22',
		},
		svgArea: {
			display: 'flex',
			marginTop: theme.spacing(1),
			justifyContent:'center',
		},
		transitionArrow: {
			display: 'flex',
			width: '65px',
			height: '27px',
			fill: '#F2BE22',
		},
		// 以下切り替えアニメーション部分
		fadeOut: {
			transition: 'all 1.5s',
			opacity: '0',
		},
	}),
);

export default function ContentChange(props) {
	const classes = useStyles();

	return (
		<div
			className={clsx(classes.contentChange)}
			onClick={props.switchElementWithAnimationToDown}
		>
			<Typography variant="h4" classes={{ h4: classes.h4 }}>
				Scroll or Click here!!
			</Typography>
			<div className={classes.svgArea}>
				<svg className={classes.transitionArrow} viewBox="0 0 65 27">
					<path d="M33.12,26.78l31.5-25A1,1,0,0,0,64,0H1A1,1,0,0,0,.38,1.78l31.5,25A1,1,0,0,0,33.12,26.78Z" />
				</svg>
			</div>
		</div>
	)
}
