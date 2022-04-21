import { Link } from "react-router-dom";

const SinStock = () =>{
    return(
        <div className="checkout container">
            <h2>Lo sentimos, la cantidad de productos que usted desea comprar ya no se encuentra en stock.
                Presione "Volver" para regresar al catalogo completo.
            </h2>
            <Link className="btn btn-primary" to="/">Volver</Link>
        </div>
    )
}

export default SinStock;