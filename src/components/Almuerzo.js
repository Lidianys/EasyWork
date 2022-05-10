import data from '../data/menu.json';
import '../css/css-components/menu.css';
import React, { useContext } from 'react';
import {UserContexts} from '../userContent/usercontent';
// import Cuenta from '../components/Cuenta';

export default function Desayuno() {
    
    const {cart, setCart} = useContext(UserContexts);


    //función para agregar elementos 
    function addToCart(item) {
        setCart([...cart, { ...item ,count:1}]);
        console.log("estamos dando click a los elementos");
    }

//     //FUNCION PARA ELIMINAR ITEMS DEL CARRITO
//     const removeFromCart = (productToRemove) => {
//     setCart(cart.filter((item) => item !== productToRemove))
//     console.log('estamos borrando');
//   }

    return (
        <div className="container-menu">
            {data.almuerzo.map((item) => {
                return (
                    <div className="container-products" key={item.id} onClick={() => addToCart(item)} >
                        <p className="nombre-producto"> {item.name}  </p>
                        <p className="precio"> {item.price} </p>
                    </div>)

            })}
            {/* <div>
                {cart.map((item) => {
                    return (
                        <div className='items-del-pedido' key={item.name}>
                            {item.name}
                            {item.price}
                            <button onClick={() => removeFromCart(item)}> <p>Eliminar</p></button>
                        </div>);
                }
             )}
            </div> */}
       
</div>)

}
