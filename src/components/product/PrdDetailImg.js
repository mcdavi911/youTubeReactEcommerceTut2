import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import { Store } from '../../Store';
import PrdImg from './PrdImg'

import Carousel from 'nuka-carousel';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  gridItemProduct: {
    flexBasis: '50%',
  }
}));


export default function PrdDetailImg() {
  const classes = useStyles();
  const { state, /*dispatch*/ } = React.useContext(Store);

  const { imgHero, title } = state.productDetail;
  
  return (
    <div>

      <Grid
        container
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Grid item className={classes.gridItemProduct}>
          <PrdImg imgHero={imgHero} title={title} />
        </Grid>

        {
          /*
          {kitProducts.length === 0 ?
          imgs.map((img, idx) => (
            <Grid key={idx} item className={classes.gridItemProduct}>
              <PImg imgHero={imgHero} title={title} />
            </Grid>
          ))
          :
          kitProducts.map((p, idx) => (
            <Grid key={idx} item className={classes.gridItemProduct}>
              <PImg imgHero={p.imgHero} title={p.title} />
            </Grid>
          ))
        }
          */
        }
      </Grid>

      <Carousel>
        <img
          src={`http://placehold.it/1000x400/7732bb/ffffff/&text=slide1`}
          alt={`Slide ${1}`}
          key="1"

          style={{
            height: 400
          }}
        />
      </Carousel>

    </div>
  )
}
