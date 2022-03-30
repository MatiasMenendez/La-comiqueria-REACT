import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({nombre, portada, descripcion}) => {
    return (
<div className="card" style={{width:'18rem'}}>
  <img src={portada} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p className="card-text">{descripcion}</p>
    <ItemCount stock={5}/>
  </div>
  </div>



    )
}

export default ItemDetail;