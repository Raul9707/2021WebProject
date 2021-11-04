import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {Footer} from 'react-materialize';


class RT_Footer extends Component{
  render(){
    return (
    <div>
      {this.props.children}
      <Footer copyrights="&copy; 2021 Copyright by Raúl Guzmán, All rights reserved"
          className='example'
      >
        <h5 className="white-text">Contacto</h5>
            <ul>
              <li><p>Direccion: Av. Ricardo Balbin con Peron 4630 </p></li>
              <li><p>Telefono: +54 1138740044 </p></li>
              <li><a href="https://www.facebook.com/gaming/RoliandArtist" className="grey-text text-lighten-3"><p>Facebook</p></a></li>
              <li><a href="https://www.instagram.com/RoliArt1/?theme=dark" className="grey-text text-lighten-3"><p>Instagram</p></a></li>
            </ul>
      </Footer>
    </div>
    );
  }
}

export default RT_Footer;