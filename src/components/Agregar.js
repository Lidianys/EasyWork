import '../css/css-components/menu.css';
import React, { useContext } from 'react';
import { UserContexts } from '../userContent/usercontent';
import '../css/css-components/agregar.css';
import '../css/css-components/agregar.css'
import {db} from '../firebase/firebase';
import { collection, addDoc } from  'firebase/firestore';;

export default function Agregar() {
    const { cart, setCart, name,
        setName,
        mesa,
        setMesa } = useContext(UserContexts);
/* Agregar a base de datos de firebase */
const addOrder = async (e) => {
    e.preventDefault();
    /* Alert & Manejo de errores */
    // if (!name.trim() || !mesa.trim() || mesa === "N° Mesa") {
    //   return console.log('error');
    // } else if (cart.length === 0) {
    //   return console.log('error');;
    // }
    // console.log('correct');;

    try {
        console.log(db);
      const docRef = await addDoc(collection(db, "products"), {
        clientName: name,
        clientTable: mesa,
        total: total,
        order: cart,
        state: "Cocinando",
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setName("");
    setCart([]);
    setMesa("");

  };
  console.log();
  console.log(name);
  console.log('base', db);

    //FUNCION PARA ELIMINAR ITEMS DEL CARRITO
    const removeFromCart = (productToRemove) => {
        setCart(cart.filter((item) => item !== productToRemove))
        console.log('estamos borrando');
    }

    //FUNCION PARA MOSTRAR EL TOTAL DEL CARRITO
    const totalProductos = cart.reduce(
        (total, cart) => (total = total + cart.price * cart.count),
        0
        
      );
      const total = totalProductos;
    return (
        <form onSubmit={(e) => addOrder(e)}>


            {cart.map((item, index) => {
                return (
                    <div className='items-del-pedido' key={index}   >
                        <table className="table table-striped table-bordered">

                            <tbody>
                                <tr className='fila-main'>
                                    <th scope="col" className='n1'>1</th>
                                    <th scope="col" className='n2'>{item.name}</th>
                                    <th scope="col" className='n3'>{item.price}</th>
                                    <th scope = "col" className='n4'>
                                        <button onClick={() => removeFromCart(item)} className='eliminar'> <p className='pEliminar'>Eliminar</p> </button>
                                    </th>
                                </tr>

                            </tbody>
                        </table>
                    </div>);
            }

            )}
             <p>Total: {total}</p>

            <div>
                <button type='submit'>
                    Enviar
                </button>
            </div>

        </form>)
}