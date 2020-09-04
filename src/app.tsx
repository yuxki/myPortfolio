import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopPage from './topPage';
import AboutPage from './aboutPage';
import Footer from './footer';
import customTheme from './customTheme';

function App() {
	return (
		<Router>
			<ThemeProvider theme={customTheme}>
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
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
