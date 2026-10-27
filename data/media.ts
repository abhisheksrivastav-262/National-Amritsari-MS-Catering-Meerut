import manifest from '../public/assets/asset-manifest.json';
export type MediaAsset={index:number;original:string;website:string;alt:string;placement:string;originalDimensions:number[];originalBytes:number;websiteBytes:number};
export const media=manifest as MediaAsset[];
export const mediaByPlacement=(placement:string)=>media.filter(item=>item.placement===placement);
export const menuBoardImages=mediaByPlacement('menu');
