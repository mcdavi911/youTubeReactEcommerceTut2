import Prd from '../components/product/Prd'
import { products } from '../data'


export default class ActStart {
  static prds = [];

  static setProductChild(p) {

    if (p.childIds.length === 0) return;

    p.childIds.forEach(id => {
      const prd = ActStart.prds.find(p => p.id === id);
      p.children.push(prd);
    })
  }


  static storeProductDetail = (dispatch, prd) => {
    const product = Prd.create(prd);

    this.setProductChild(product);

    return dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: product
    })
  }
  

  static setProductChildren() {

    ActStart.prds.forEach(p => {
      this.setProductChild(p);
    })
  }


  static storeProducts = (dispatch) => {

    products.forEach(p => {
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

      ActStart.prds.push(prd);
    })

    //console.log('actionPrds', ActStart.prds);
    ActStart.setProductChildren();


    return dispatch({
      type: 'SET_PRODUCTS',
      payload: ActStart.prds
    })
  }
}