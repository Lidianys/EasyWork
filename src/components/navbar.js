/* eslint-disable jsx-a11y/alt-text */
import { Link } from 'react-router-dom';
import '../css/navbar.css';
import '../App.css';

export default function Navbar() {
    return (
      <div className='div-navbar container-fluid'>
        <nav className='navbar navbar-container d-flex justify-content-between'>
          <ul className=' d-flex '>
            <li>
              <Link className='links mesero-boton' to='/mesero'>
                Mesero
              </Link>
            </li>
            <li>
              <Link className='links chef-boton' to='/chef'>
                Chef
              </Link>
            </li>
            <li>
              <Link className='links pedidos-boton' to='/pedidos'>
                Pedidos
              </Link>
            </li>
          </ul>
          <ul className=''>
            <li>
              <Link className='links ' to='/'>
                <img
                  className='img-fluid img-logo'
                  src={require('../imagenes/logo.png')}
                  alt='logo'
                />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
  