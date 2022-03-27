import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({comicDetail}) => {
    const {nombre, portada, descripcion} = comicDetail
    return (
        <div className="firstItemCount" >
            <h2>Detalle del producto: {nombre}</h2>
            <img src={portada} alt={nombre}/>
            <p>{descripcion}</p>
            <ItemCount stock={5}/>
        </div>
    )
}

export default ItemDetail;