import React from "react"
import { Link } from "react-router-dom";

export const Item = ({id, nombre, portada, descripcion}) => {
  
    return (
 <div className="card" style={{width:'18rem'}}>
  <img src={portada} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">{descripcion}</p>
    <Link to={`/detail/${id}`}><button className="btn btn-primary">Ver más</button></Link>
  </div>
  </div>
    );
}

export default Item;