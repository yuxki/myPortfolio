import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from "./header";
import TopPage from "./TopPage"

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<TopPage />
			</div>
		)
	}
}

ReactDOM.render(<App />, document.querySelector('#app'))
