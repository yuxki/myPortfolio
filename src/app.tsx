import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import TopPage from "./topPage";
import AboutPage from "./aboutPage";
import PageLoading from "./pageLoading";

import FeaturedWorkSandBox from "./featuredWorkSandBox"
import ComponentSandBox from "./componentSandBox"

const theme = createMuiTheme({
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
		h2: {
			fontSize: '50px',
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

theme.typography.h4 = {
	fontSize: '22px',
	fontWeight: 'normal',
	[theme.breakpoints.down('xs')]: {
		fontSize: '19px',
		fontWeight: 'normal',
	},
}

theme.typography.h6 = {
	fontSize: '14px',
	fontWeight: 'lighter',
	[theme.breakpoints.down('xs')]: {
		fontSize: '12px',
		fontWeight: 'normal',
	},
}

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div>
					<Switch>
						<Route path={"/about"}>
							<AboutPage />
						</Route>
						<Route path={"/"}>
							<TopPage />
						</Route>
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
		/*
		<Router>
			<div>
				<FeaturedWorkSandBox />
			</div>
		</Router>
		*/
		/*
			<div>
				<ComponentSandBox />
			</div>
			*/
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
