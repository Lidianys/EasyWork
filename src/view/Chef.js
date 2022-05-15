import { db } from "../firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import '../css/css-view/chef.css'

const Orders = collection(db, 'products');
const getOrders = async () => {
    const result = await getDocs(query(Orders), orderBy('dateOrder', 'desc'));
    return result;

}

export default function Chef() {
    const [ordenes, setOrdenes] = useState([]);
    useEffect(() => {
        getOrdersData();
    }, []);

    const getOrdersData = async () => {

        const p = await getOrders();
        setOrdenes(p.docs);
    }

    return (

        <div className="pedido-container">
            
                <div className="pedido-cocina">
                   
                       
                        {ordenes.map(element => {
                            return (
                                
                                <div className="div-general">
                                    <div className="div-name">
                                        <p className="p-name" >Name:{ element.data().clientName}</p>
                                        <p className="p-mesa">Mesa:{ element.data().clientTable}</p>
                                    </div>
                                   
                                    <table className="tabla-pedido table-bordered">
                                    <tbody className="container">
                                    {element.data().order.map(item => {
                                        return (
                                           
                                            
                                                
                                                    <tr className="items">
                                                        <td className="filas-number">{item.count}</td>
                                                        <td className="filas-name">{item.name} </td>
                                                        


                                                    </tr>
                                               
                                            
                                        )
                                    })}
                                     </tbody>
                                </table>
                                    <div className="div-estado">
                                    <p className="estadoPedido"> Estado:{element.data().state} </p>
                                    <button className="estado-listo btn btn-outline-secondary">Listo</button>
                                    </div>
                                    
                               
                                </div>
                            )
                        })}
                 
                </div>
         

        </div>
    )

}