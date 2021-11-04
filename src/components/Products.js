import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { makeStyles} from '@material-ui/core/styles';
import Product from './Product';
import products from "../product-data";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import Footer from "./Footer.js"

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
    <div>
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://eloutput.com/app/uploads-eloutput.com/2019/09/razer-tienda-las-vegas.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>La mejor tienda</h3>
      <p>Identificados por nuestra indudable calidad y compromiso con el cliente.
        Le traemos el mejor sitio donde armar,optimizar y actualizar su computadora.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://microsofters.com/wp-content/uploads/2020/11/setup-gaming.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>La mayor variedad de productos</h3>
      <p>Todo lo necesario para esa PC que deseas armar, está en nuestro catalogo.
        Solo buscalo y lo conseguirás.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://wallpaperaccess.com/full/2975814.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Los equipos mas actualizados</h3>
      <p>Tenemos todo tipo de piezas para tu computadora, las mas actuales y modernas.
         Perfectas para armas esa deseada PC Gamer.
      </p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>

  <Footer/>
  </div>


  );
}


