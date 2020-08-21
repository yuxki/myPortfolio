import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./header";
import TopPage from "./TopPage";
import AboutPage from "./AboutPage";

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
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
}

ReactDOM.render(<App />, document.querySelector('#app'))
