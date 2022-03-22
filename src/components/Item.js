import React from "react"

export const Comics = ({nombre, portada, descripcion}) => {
    setTimeout({portada},300000);
    return (
 <div className="card" Style="width: 18rem;">
  <img src={portada} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{nombre}</h5>
    <p className="card-text">{descripcion}</p>
    <a href="index.html" className="btn btn-primary">Comprar</a>
  </div>
  </div>
    );
}

