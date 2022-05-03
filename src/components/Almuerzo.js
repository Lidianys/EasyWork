import data from '../data/menu.json'
import '../css/css-components/menu.css';

export default function Almuerzo () {
    return (
        <div className="container-menu">
            {data.almuerzo.map(element => {
                return (
                    <div  className= "container-products" key={element.id}>
                    <p className="nombre-producto"> {element.name} </p>
                    <p className="precio"> {element.price}  </p>
                    </div>)

            })}
            </div> )
}