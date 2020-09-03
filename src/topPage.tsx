import * as React from 'react';
import TopPageContent from "./topPageContent";

export default function TopPage(props) {

React.useEffect(() => {
		return () => {
			// pageのswitch時に、画面のトップまで戻る
			window.scrollTo(0, 0);
		}
	});

	return (
		<div>
			<TopPageContent />
		</div>
	)
}
