import Precios from '../components/Precios'
import Name from '../components/Name'
import Agregar from '../components/Agregar';

export default function Cuenta() {
    return (
        <article>
            <div>
                <p>Cuenta</p>
                <Name />
                <Precios />
                <Agregar />
                {/* <Precios/> */}
            </div>
            <div>
               
            </div>
        </article>
    )
}