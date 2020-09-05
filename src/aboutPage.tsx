import * as React from 'react';
import AboutPageContent from './aboutPageContent';

export default function AboutPage() {

	React.useEffect(() => {
		return () => {
			// pageのswitch時に、画面のトップまで戻る
			window.scrollTo(0, 0);
		}
	});

	return (
		<div>
			<AboutPageContent />
		</div>
	)
}
