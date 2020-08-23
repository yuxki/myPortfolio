import * as React from 'react';
import TopPageContent from "./topPageContent";

export default function TopPage(props) {

React.useEffect(() => {
	console.log('render in TopPage!');

		return () => {
			console.log('TopPage is unmounted');
		}
	});

	return (
		<div>
			<TopPageContent
			isPreload={props.isPreload}
			handleDonePreload={props.handleDonePreload}
			 />
		</div>
	)
}
