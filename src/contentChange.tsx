import * as React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		contentChange: {
			display: 'flex',
			backgroundColor: '#F2BE22',
			width: '270px',
			height: '53px',
			position: 'absolute',
			bottom: 0,
			right: theme.spacing(10),
			justifyContent: 'center',
			alignItems: 'center',
		},
		root: {
			display: 'flex',
			color: '#FFFFFF',
		},
		h4: {
			color: '#FFFFFF',
			display: 'flex',
			fontSize: '15px',
		},
		// 以下切り替えアニメーション部分
		fadeOut: {
			transition: 'all 1.5s',
			opacity: '0',
		},
	}),
);

const useStatefulStyles = makeStyles({
	moveOutContentChange: {
		transform: 'translateY' + `(${props => props.test}px)`,
		transitionTimingFunction: 'ease-out',
		transitionDuration: '1s',
	},
});

export default function ContentChange(props) {
	const classes = useStyles();
	const statefulClasses = useStatefulStyles(props);
	const [changeContent, setChangeContent] = React.useState(false);

	const handleChangeContent = () => {
		setChangeContent(true);
	}

	return (
		<div
			className={clsx(classes.contentChange,
				changeContent && classes.fadeOut,
				changeContent && statefulClasses.moveOutContentChange)}
			onClick={props.incrementTopPageNum}
		>
			<ExpandMoreIcon
				fontSize='large'
				classes={{ root: classes.root }}
			/>
			<Typography
				variant="h4"
				classes={{ h4: classes.h4 }}
			>
				works
			</Typography>
		</div>
	)
}
