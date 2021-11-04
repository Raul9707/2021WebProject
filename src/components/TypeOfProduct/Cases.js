import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Product from '../Product';
import products from "../../product-data";

/*const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        padding: theme.spacing(2),
    },

}));



export default function Products() {
    const classes = useStyles();
  return (
    <div className={classes.root}>
        <Grid container spacing={2}>
          {
            products.map(product => product.Type == "Cases" ?                 
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <Product key={product.id} product={product}/>
            </Grid> 
            : null)
          }
        </Grid>
    </div>
  );
}
