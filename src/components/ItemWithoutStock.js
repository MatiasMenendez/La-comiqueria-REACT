import React from "react";
import { Link } from "react-router-dom";


const ItemWithoutStock = ({nombre, portada, descripcion, stock, precio}) => {

  
    return( <div className="card" style={{width:'18rem'}}>
    <img src={portada} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h2 className="card-title">{nombre}</h2>
      <p className="card-text">{descripcion}</p>
      <p className="card-title">$ {precio}</p>
      <p style={{color: 'red', fontWeight: '700'}}>¡Item sin stock!</p>
      <Link to={"/"} className="btn btn-primary">Volver</Link>
      </div>
  </div>
      )
}

export default ItemWithoutStock;