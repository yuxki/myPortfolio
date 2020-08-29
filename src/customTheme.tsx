import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: [
			'Noto Sans JP',
			'helvetica',
			"Arial",
			'sans-serif',
		].join(','),
		h1: {
			fontSize: '84px',
			fontWeight: 'lighter',
		},
		h3: {
			fontWeight: 'lighter',
			fontSize: '41px',
		},
		h5: {
			fontSize: '18px',
		},
		body1: {
			fontSize: '16px',
			fontWeight: 'lighter',
		}
	},
});

customTheme.typography.h2 = {
	fontSize: '50px',
	fontWeight: 'lighter',
	[customTheme.breakpoints.down('xs')]:{
		fontSize: '34px',
		fontWeight: 'lighter',
	}
}

customTheme.typography.h4 = {
	fontSize: '22px',
	fontWeight: 'normal',
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '19px',
		fontWeight: 'normal',
	},
}

customTheme.typography.h6 = {
	fontSize: '14px',
	fontWeight: 'lighter',
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '12px',
		fontWeight: 'normal',
	},
}

export default customTheme;
