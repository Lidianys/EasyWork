import '../css/css-components/agregar.css';
export default function Precios() {
    return(
        <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col" className='item'>Item</th>
      <th scope="col" className='product'>Producto</th>
      <th scope="col" className='price'>Precio</th>
      <th scope="col" className='eliminar'>Eliminar</th>
    </tr>
  </thead>
  
</table>
    )
}