export function instantiateImages(infoArray: Array<FeaturedWorkInfo>) {
	infoArray.forEach((imageInfo) => {
		let imageArray: Array<HTMLImageElement> = [];
		imageInfo.featuredWorkImgSrc.forEach(() => {
			imageArray.push(new Image());
		});
		imageInfo.featuredWorkImgElem = imageArray;
	})
}

export function handSrcToImageElem(infoArray: Array<FeaturedWorkInfo>) {
	infoArray.forEach((info) => {
		for (let i = 0; i < info.featuredWorkImgSrc.length; i++) {
			info.featuredWorkImgElem[i].src = info.featuredWorkImgSrc[i];
		}
	})
}

export  function joinFeaturedWorkImgElem(infoArray: Array<FeaturedWorkInfo>): Array<HTMLImageElement> {
	let htmlImageArray: Array<HTMLImageElement> = [];
	infoArray.forEach((info) => {
		htmlImageArray = htmlImageArray.concat(info.featuredWorkImgElem);
	});
	return htmlImageArray;
},

export function setLoadAllCallback(elems: Array<HTMLImageElement>, callback) {
	let parElemPercent = 100 / elems.length;
	let remainPercent = 100 / elems.length;

	let count = 0;

	for (let i = 0; i < elems.length; ++i) {
		elems[i].onload = function() {

			++count;
			if (count == elems.length) {

				callback()
			}
		}
	}
}

export function fillDoneLoadingPercent(fillPercent: number) {
	if (doneLoadingPercent >= 100) return
	setDoneLoadingPercent((doneLoadingPercent + fillPercent));
}
