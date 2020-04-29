import React from 'react'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

//import { cartIncrement, cartDecrement, cartRemove } from '../../actions/Act'
import ActCart from '../../actions/ActCart'

export default function CartProduct(props) {
  const { id, title, img, price, count } = props.product;

  return (
    <>
      <Grid container>
        <Grid item md={2}>
          <img
            src={img}
            style={{ width: "5rem", heigth: "5rem" }}
            className="img-fluid"
            alt=""
          />
        </Grid>
        <Grid item md={2}>
          <span className="d-lg-none">product :</span> {title}
        </Grid>
        <Grid item md={2}>
          <strong>
            <span className="d-lg-none">price :</span> ${price}
          </strong>
        </Grid>
        <Grid item md={2}>
          <Box display="flex" justifyContent="center" >
            <div>
              <span
                className="btn btn-black mx-1"
                onClick={() => ActCart.changeCount(props.dispatch, props.product, -1)}
              >
                -
              </span>
              <span className="btn btn-black mx-1">{count}</span>

              <span
                className="btn btn-black mx-1"
                onClick={() => (
                  ActCart.changeCount(props.dispatch, props.product)
                )}
              >
                +
              </span>


            </div>
          </Box>
      </Grid>
      <Grid item md={2}>
        <div className=" cart-icon" onClick={() => ActCart.remove(props.dispatch, id)}> {/*removeItem(id)}>*/}
          <i className="fas fa-trash" />
        </div>
      </Grid>
      <Grid item md={2}>
        <strong>item total : ${count * price} </strong>
      </Grid>
    </Grid>

     
    </>
  )
}
