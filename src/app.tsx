import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TopPage from "./topPage";
import AboutPage from "./aboutPage";
import Footer from "./footer";
import CssBaseline from '@material-ui/core/CssBaseline';
import FeaturedWorkSandBox from "./featuredWorkSandBox"
import ComponentSandBox from "./componentSandBox"

const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					backgroundColor: '#F2BE22',
				},
				body: {
					backgroundColor: '#FFFFFF',
				},
				a: {
					color: "#000000",
					textDecoration: 'none',
				},
				div: {
					'-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
				},
			},
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1030,
			lg: 1280,
			xl: 1920,
		},
	},
	typography: {
		fontFamily: [
			'Noto Sans JP',
			'helvetica',
			'Arial',
			'sans-serif',
		].join(','),
		h5: {
			fontSize: '18px',
		},
		body1: {
			fontSize: '16px',
			fontWeight: 'lighter',
		}
	},
});

const fontFamily = 'Noto Sans JP, helvetica, Arial, sans-serif';

theme.typography.h1 = {
	fontSize: '84px',
	fontWeight: 'lighter',
	fontFamily: fontFamily,
	[theme.breakpoints.down('xs')]: {
		fontSize: '66px',
		fontWeight: 'lighter',
	}
}

theme.typography.h2 = {
	fontSize: '50px',
	fontWeight: 'lighter',
	fontFamily: fontFamily,
	[theme.breakpoints.down('xs')]: {
		fontSize: '34px',
		fontWeight: 'lighter',
	}
}

theme.typography.h3 = {
	fontSize: '47px',
	fontWeight: 'lighter',
	fontFamily: fontFamily,
	[theme.breakpoints.down('xs')]: {
		fontSize: '36px',
		fontWeight: 'lighter',
	}
}

theme.typography.h4 = {
	fontSize: '22px',
	fontWeight: 'normal',
	fontFamily: fontFamily,
	[theme.breakpoints.down('xs')]: {
		fontSize: '19px',
		fontWeight: 'normal',
	},
}

theme.typography.h6 = {
	fontSize: '14px',
	fontWeight: 'lighter',
	fontFamily: fontFamily,
	[theme.breakpoints.down('xs')]: {
		fontSize: '12px',
		fontWeight: 'normal',
	},
}

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div>
					<Switch>
						<Route path={"/about"}>
							<AboutPage />
						</Route>
						<Route path={"/"}>
							<TopPage />
						</Route>
					</Switch>
					<Footer />
				</div>
			</ThemeProvider>
		</Router>
		/*
			<div>
				<ComponentSandBox />
			</div>
			*/
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
