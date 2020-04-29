import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from '../../Store';
import { productType } from '../../data';
import Breadcrumbs from '../Breadcrumbs';
import RightRail from '../../layouts/RightRail'
import PrdDetailImg from './PrdDetailImg'

import Container from '@material-ui/core/Container';
import PrdDetailBasket from './PrdDetailBasket'
import PrdDetailBasketCase from './PrdDetailBasketCase'
import PrdDetailBasketKit from './PrdDetailBasketKit'

// Vendors
import Carousel from 'nuka-carousel';


/*
const useStyles = makeStyles((theme) => ({
  
}));
*/

export default function PrdDetail(props) {
  const { state, /*dispatch*/ } = React.useContext(Store);
  
  //const classes = useStyles();

  const { category } = state.productDetail;

  let detail;

  switch (category) {
    case productType.KIT:
      detail = { img: <PrdDetailImg/>, basket: <PrdDetailBasketKit /> };
      break;
    //case productType.LENSE:
    //break;
    case productType.CASE:
      detail = {img: <PrdDetailImg/>, basket: <PrdDetailBasketCase /> };
      break;
    //case productType.MOTOR:
    //break;
    //case productType.TRIPODS:
    //break;
    //case productType.PREPAID_CREDIT:
    //break;
    default:
      detail = { img: <PrdDetailImg/>, basket: <PrdDetailBasket /> };
  }

  return (
    <>
      <Container>
        <Breadcrumbs />
        <RightRail left={detail.img} right={detail.basket} />
      </Container >
    </>
  )
}



