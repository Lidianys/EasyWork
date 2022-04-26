import '../css/notfound.css'
export default function NotFound() {
 return(
    <div className="container">
        <div>
            <img src={require("../imagenes/notfound.png") } alt="NotFound" className="rounded mx-auto d-block notfound"/>
        </div>
    </div>


 )   
}