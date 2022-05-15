import '../css/css-components/name.css'
import { useContext } from 'react'
import {UserContexts} from '../userContent/usercontent';

export default function Name() {
    const { name, setName, mesa, setMesa } = useContext(UserContexts);


    return (
        <div className='name'>
            <input type="text" className="form-control nombre-input" placeholder="Nombre del cliente" aria-label="Nombre" aria-describedby="addon-wrapping"  value={name.slice(0, 20)}
              onChange={(e) => setName(e.target.value)}/>
            <input type="number" className="form-control mesa-input" placeholder="Mesa" aria-label="Numero" aria-describedby="addon-wrapping" value={mesa}
              onChange={(e) => setMesa(e.target.value)} />

        </div>
    )
}