import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopPage from "./topPage";
import AboutPage from "./aboutPage";
import PageLoading from "./pageLoading";

import FeaturedWorkSandBox from "./featuredWorkSandBox"
import ComponentSandBox from "./componentSandBox"

function App() {
	return (
		<Router>
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
