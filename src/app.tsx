import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import TopPage from "./topPage";
import AboutPage from "./aboutPage";
import PageLoading from "./pageLoading";

function App() {
	// ローディング画面を表示するか否かのHook
	const [isLoading, setIsLoading] = React.useState(true);

	function startLoading() {
		setIsLoading(true);
	}

	function endLoading() {
		setIsLoading(false);
	}

	React.useEffect(() => {
		console.log('render in App');
		// endLoading();
	})

	return (
		<Router>
			<div>
				<PageLoading />
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
	)
}

ReactDOM.render(<App />, document.querySelector('#app'))
