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
                                <table className="table-pedido">
                                <tbody className="container">
                                    <div className="div-name">
                                        <p className="name" >Name: {element.data().clientName}</p>
                                        <p className="mesa">Mesa: {element.data().clientTable}</p>
                                    </div>

                                    {element.data().order.map(item => {
                                        return (
                                           
                                             
                                                
                                                    <tr>
                                                        <td>{item.count} </td>
                                                        <td>{item.name} </td>
                                                        <td>{item.price} </td>


                                                    </tr>
                                               
                                            
                                        )
                                    })}
                                    <p> Total: {element.data().total} </p>
                                    <p> Estado: {element.data().state} </p>
                                </tbody>
                                </table>
                            )
                        })}
                 
                </div>
         

        </div>
    )

}