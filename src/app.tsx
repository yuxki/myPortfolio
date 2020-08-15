import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from "./header";
import Billboard from "./billboard";
import ContentChange from "./contentChange";

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Billboard />
				<ContentChange test="-100" />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#app'))
