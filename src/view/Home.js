import '../css/imgpag.css'
export default  function Home( ) {
    return( 
        <div className='d-flex justify-content-center container'>
            <img className='logopag' src={require('../imagenes/logopag.png')} alt='logo' /> 
        </div>
    )
};