import * as React from 'react';

// snsIconのリンクが持つ情報を定義した型
interface SnsIconLinKInfo {
	snsName: string,
	url: string,
	src: string,
}

const twitterInfo: SnsIconLinKInfo = {
	snsName: 'twitter',
	url: 'https://twitter.com/',
	src: './public/Twitter_Logo_Blue.svg'
}

const noteInfo: SnsIconLinKInfo = {
	snsName: 'note',
	url: 'https://note.com/',
	src: './public/logo_symbol.svg'
}

const snsToUrlMap: Array<SnsIconLinKInfo> = [twitterInfo, noteInfo];

// snsNameが一致するSnsIconLinKInfo型のデータを取り出す。
function getSnsIconInfo(snsName: string, map: Array<SnsIconLinKInfo>): SnsIconLinKInfo {
	let info: SnsIconLinKInfo;
	info = map.filter((item, index) => {
		if (item.snsName === snsName) return true;
	})[0]
	return info
}

export default function SnsIconLink(props) {
	const snsName: string = props.sns;
	const accountName: string = props.accountName;
	const size: string = props.size ? props.size : '60px'

	// snsNameが一致する情報を取得して、jsxの属性に当て込むデータを作る。
	const linkInfo: SnsIconLinKInfo = getSnsIconInfo(snsName, snsToUrlMap);
	console.log(linkInfo);
	const linkUrl = linkInfo.url + accountName;
	const src = linkInfo.src;

	return (
		<div>
			<a href={linkUrl}>
				<img src={src} width={size} height={size} />
			</a>
		</div>
	)
}
