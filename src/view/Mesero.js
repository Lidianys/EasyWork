import Productos from '../components/Productos';
import Cuenta from '../components/Cuenta';
import '../css/css-view/mesero.css'
export default function Mesero() {
    return (
        <div className='containers' >
        <div className='row'>
            <article className='col-6'>
                <Productos />
            </article>
            
            <section className='col-6'>
                <Cuenta />
            </section>
            </div>
           

        </div>
    )
};