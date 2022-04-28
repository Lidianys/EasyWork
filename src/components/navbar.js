/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";

import { Link } from 'react-router-dom';
import '../css/css-components/navbar.css';
// import '../App.css';

export default function Navbar() {
  const [tabState, settabState] = useState(1);
  const tabValue = (index) => {
    settabState(index);
  };
  return (
    <div className='div-navbar container-fluid'>
      <nav className='navbar navbar-container d-flex justify-content-between'>
        <ul className=' d-flex '>
          <li className="">
            <Link to='/mesero' type="buttom" className={
              tabState === 1
                ? "tabs-productos links active-tabs-productos"
                : "tabs-producto links"
            }
              onClick={() => tabValue(1)}>

              Mesero
            </Link>

          </li>
          <li >
            <Link to='/chef' type="buttom"  className={
              tabState === 2
                ? "tabs-productos links active-tabs-productos"
                : "tabs-productos links"
                 
            }
              onClick={() => tabValue(2)}>
                Chef
              </Link>
          </li>
          <li className="">
            <Link to='/pedidos' type="buttom" className={
              tabState === 3
                ? " tabs-productos links active-tabs-productos"
                : " tabs-productos links"
            }
              onClick={() => tabValue(3)}>
                Pedidos
              </Link>
          </li>
        </ul>
        <ul className=''>
          <li>
            <Link className='navbar-brand ' to='/'>
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
