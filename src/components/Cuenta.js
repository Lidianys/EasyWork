import Precios from '../components/Precios'
import Name from '../components/Name'
import Agregar from '../components/Agregar';


export default function Cuenta() {
    return (
        <article>
            <div>
                <p className='text-center fw-bold'>Cuenta</p>
                <Name />
                <Precios />
                <Agregar />
               
            </div>
            <div>
               
            </div>
        </article>
    )
}