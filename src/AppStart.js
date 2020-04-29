import { products } from './data'
import Prd from './components/product/Prd'


export default class PrdStore {

  static _prds = [];
  static _id = 0;

  // get children
  static _setPrdChildren = () => {
    
    
    PrdStore._prds.forEach(p => {
      if (p.childIds.length !== 0) return;
        p.childIds.forEach(id => {
          const prd = PrdStore._prds.find(p => p.id === id);
          p._children.push(prd);
        })
    })

    //console.log('PrdStore_prds',PrdStore._prds)
  }

  static init = () => {
    products.forEach((p) => {
      const prd = new Prd(
        p.id,
        p.title,
        p.imgHero,
        p.imgs,
        p.childIds,
        p.price,
        p.info,
        p.count,
        p.category
      );

      PrdStore._prds.push(prd)
    })

    PrdStore._setPrdChildren();
  }
}



