import produce from 'immer'
import Prd from '../components/product/Prd'
import Act from './Act';

export default class ActCart {
  

  static changeCount = (dispatch, product, count = 1) => {
    const prd = Prd.create(product);
    prd.count += count;

    if (prd.count < 1) return;

    return dispatch({
      type: 'CART_CHANGE_COUNT',
      payload: prd
    })
  }


  static increment = (dispatch, product) => {
    const prd = Prd.create(product);
    prd.count++;
    
    return dispatch({
      type: 'CART_INCREMENT',
      payload: prd
    }) 
  }

  static decrement = (dispatch, id, product) => {
    
    
    return dispatch({
      type: 'CART_DECREMENT',
      payload: id
    })
  }

  static remove = (dispatch, id) => {
    return dispatch({
      type: 'CART_REMOVE',
      payload: id
    })
  }

  static clear = (dispatch) => {
    return dispatch({
      type: 'CART_CLEAR',
      payload: null
    })
  }

  static add = (dispatch, product, quantity = 1) => {
    //console.log('from action quantity', quantity);
  
    const prd = Prd.create(product);
    prd.count += quantity;

/*
    const productNew = produce(product, draft => {
      draft.count += quantity;
    })
    */
    
    return dispatch({
      type: 'CART_ADD',
      payload: prd
    })
  }
}



// Cart
/*
export const cartClear = (dispatch) => {

  return dispatch({
    type: 'CART_CLEAR',
    payload: null
  })
}
*/
