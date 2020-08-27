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
	typography: {
		fontFamily: [
			'Noto Sans CJK JP',
			'helvetica',
			"Arial",
			'sans-serif',
		].join(','),
	},
});

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
