import * as React from 'react';
import AboutPageContent from "./aboutPageContent";

export default function AboutPage(props) {

	React.useEffect(() => {
		console.log('render in AboutPage!');

		return () => {
			console.log('AboutPage is unmounted');
		}
	});

	return (
		<div>
			<AboutPageContent />
		</div>
	)
}
