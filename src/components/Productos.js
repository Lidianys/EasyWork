import Botons from './Botons';
import '../css/css-components/productos.css'
// import Show from './Show';
export default function Productos() {
    return(
        <aside>
          <div>
              <h1 className='productos'>Productos</h1>
              <Botons/>
              {/* <Show/> */}


          </div>
        </aside>
    )
}