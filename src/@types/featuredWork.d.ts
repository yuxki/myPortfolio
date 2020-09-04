declare module "featuredWork" {

	export interface FeaturedWorkInfo {
		featuredWorkTitle: string;
		featuredWorkType: string;
		featuredWorkImgSrc: Array<string>;
		featuredWorkButtomMaxWidth: Array<string>;
		featuredWorkImgElem: Array<HTMLImageElement>;
		featuredWorkLayout: string;
	}
}
