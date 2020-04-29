import React from 'react'
import { products } from './data'
import produce from 'immer'
import Prd from './components/product/Prd'


const initialState = {
  products,
  productDetail: Prd.create(products[2]),
  cart: [],
  category: 'all products',
  searchTerm: '',
  searchResults: [],
  toggleMobileDrawer: false,
  //cartAmount: 0,
  cartTax: 1.6
}

const reducer = produce((draft, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      draft.products = action.payload;
      break;
    case 'SET_PRODUCT_DETAIL':
      draft.productDetail = action.payload;
      break;
    case 'SET_SEARCH_TERM':
      draft.searchTerm = action.payload;
      break;
    case 'SET_SEARCH_RESULTS':
      draft.searchResults = action.payload;
      break;
    case 'SET_CATEGORY':
      draft.category = action.payload;
      break;
    case 'TOGGLE_MOBILE_DRAWER':
      draft.toggleMobileDrawer = !draft.toggleMobileDrawer;
      break;
    case 'CART_CHANGE_COUNT':
      const pIdx2 = draft.cart.findIndex(p => p.id === action.payload.id);
      draft.cart.splice(pIdx2,1,action.payload);

      break;
      /*
    case 'CART_INCREMENT':
      console.log('cart increment here');
      const pIdx2 = draft.cart.findIndex(p => p.id === action.payload.id);
      draft.cart.splice(pIdx2,1,action.payload);
      //draft.cart[pIdx2].count++
      break;
    case 'CART_DECREMENT':
      const pIdx3 = draft.cart.findIndex(p => p.id === action.payload)
      if (draft.cart[pIdx3].count > 0) draft.cart[pIdx3].count--
      break;
      */
    case 'CART_REMOVE':
      const pIdx4 = draft.cart.findIndex(p => p.id === action.payload);
      draft.cart.splice(pIdx4, 1)
      break;
    case 'CART_CLEAR':
      
      draft.cart = []
      break;
    case 'CART_ADD':

      if (draft.cart.length > 0) {
        const pIdx = draft.cart.findIndex(p => p.id === action.payload.id)

        if (pIdx === -1) {
          draft.cart.push(action.payload)
        } else {
          // draft.cart.splice(pIdx,1, action.payload);
          draft.cart[pIdx].count = action.payload.count;
        }
      } else {
        draft.cart.push(action.payload)
      }
      break;
    default:
      console.log('hello from default switch case');
  }
})


export const Store = React.createContext(initialState);

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log('state from store is ', state);
  //console.log('store state is ', state.products);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  )
}
