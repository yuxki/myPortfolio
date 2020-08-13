import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PersistentDrawerRight from "./header";

class App extends React.Component{
	render(){
		return(
			<div>
				<PersistentDrawerRight />
				<h1>Atelier Hiroyuki</h1>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.querySelector('#app'))
