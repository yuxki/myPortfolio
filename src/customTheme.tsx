import { createMuiTheme } from '@material-ui/core/styles';

const FONT_FAMILY = 'Noto Sans JP, helvetica, Arial, sans-serif';

const customTheme = createMuiTheme({
	overrides: {
		// アプリ全体に適用するスタイル
		MuiCssBaseline: {
			'@global': {
				html: {
					backgroundColor: '#F2BE22',
					overflowX: 'hidden',
					'-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
				},
				body: {
					backgroundColor: '#FFFFFF',
				},
				a: {
					color: "#000000",
					textDecoration: 'none',
				},
			},
		},
	},
	// ブレークポイントの設定
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1030,
			lg: 1280,
			xl: 1920,
		},
	},
	// カラーパレットの設定
	palette: {
		primary: {
			light: '#FFD96A',
			main: '#F2BE22',
			dark: '#C19102',
			contrastText: '#000000',
		},
		secondary: {
			light: '#F7F7F7',
			main: '#9FA0A0',
			dark: '#484848',
			contrastText: '#000000',
		},
	},
	typography: {
		fontFamily: [
			'Noto Sans JP',
			'helvetica',
			'Arial',
			'sans-serif',
		].join(','),
	},
});

// タイポグラフィの設定
customTheme.typography.h1 = {
	fontSize: '84px',
	fontWeight: 'lighter',
	fontFamily: FONT_FAMILY,
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '66px',
		fontWeight: 'lighter',
	}
}

customTheme.typography.h2 = {
	fontSize: '50px',
	fontWeight: 'lighter',
	fontFamily: FONT_FAMILY,
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '34px',
		fontWeight: 'lighter',
	}
}

customTheme.typography.h3 = {
	fontSize: '47px',
	fontWeight: 'lighter',
	fontFamily: FONT_FAMILY,
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '36px',
		fontWeight: 'lighter',
	}
}

customTheme.typography.h4 = {
	fontSize: '22px',
	fontWeight: 'normal',
	fontFamily: FONT_FAMILY,
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '19px',
		fontWeight: 'normal',
	},
}

customTheme.typography.h5 = {
	fontSize: '18px',
	fontFamily: FONT_FAMILY,
}

customTheme.typography.h6 = {
	fontSize: '14px',
	fontWeight: 'lighter',
	fontFamily: FONT_FAMILY,
	[customTheme.breakpoints.down('xs')]: {
		fontSize: '12px',
		fontWeight: 'normal',
	},
}

customTheme.typography.body1 = {
	fontSize: '16px',
	fontWeight: 'lighter',
	fontFamily: FONT_FAMILY,
}

export default customTheme;
