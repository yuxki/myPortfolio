import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopPage from "./topPage";
import AboutPage from "./aboutPage";
import PageLoading from "./pageLoading";

import FeaturedWorkSandBox from "./featuredWorkSandBox"

function App() {
	// ローディング完了が否かのHopk
	const [isPreload, setIsPreload] = React.useState(false);

	function handleDonePreload() {
		setIsPreload(true);
	}

	return (
		/*
		<Router>
			<div>
				<Switch>
					<Route path={"/about"}>
						<AboutPage />
					</Route>
					<Route path={"/"}>
						<TopPage
							isPreload={isPreload}
							handleDonePreload={handleDonePreload}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
		*/
		<Router>
			<div>
				<FeaturedWorkSandBox />
			</div>
		</Router>
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
