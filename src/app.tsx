import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from "./header";
import Billboard from "./billboard";

class App extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<Billboard />
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#app'))
