import produce from 'immer'
import Prd from '../components/product/Prd'


export default class Act {

  static setProductDetail = (dispatch, product) => {
    
    return dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: product
    })
  }

  static setSearchTerm = (dispatch, searchTerm) => {
    return dispatch({
      type: 'SET_SEARCH_TERM',
      payload: searchTerm.toLowerCase()
    })
  }

  static setSearchResults = (dispatch, products, term = null) => {
    let searchResults = products;

    if (term) {
      searchResults = products.filter(p =>
        p.category.toLowerCase().includes(term));
    }

    return dispatch({
      type: 'SET_SEARCH_RESULTS',
      payload: searchResults
    })
  }


  static setCategory = (dispatch, category = 'all products') => {
    return dispatch({
      type: 'SET_CATEGORY',
      payload: category
    })
  }


  static toggleMobileDrawer = (dispatch) => {
    return dispatch({
      type: 'TOGGLE_MOBILE_DRAWER',
      payload: null
    })
  }
}











