import {mediaByPlacement} from '../data/media';
export default function PhotoCollection({placement}:{placement:string}){const items=mediaByPlacement(placement);return <div className="photo-collection">{items.map(item=><figure className="photo-collection-item" key={item.website}><img src={item.website} alt={item.alt} loading="lazy"/><figcaption>{item.alt}</figcaption></figure>)}</div>}
