import '../css/css-components/name.css'
export default function Name() {
    return (
        <div className='name'>
            <input type="text" className="form-control nombre" placeholder="Nombre del cliente" aria-label="Nombre" aria-describedby="addon-wrapping" />
            <input type="number" className="form-control mesa" placeholder="Mesa" aria-label="Numero" aria-describedby="addon-wrapping" />

        </div>
    )
}