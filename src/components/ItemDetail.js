import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import Select from "./Select";

const options =[
  {value: 'Español', text:'Español'},
  {value: 'Ingles', text:'Ingles'},
]

const ItemDetail = ({id, nombre, portada, descripcion, stock}) => {

  const navigate = useNavigate ()

  const handleNavigate = () => {
    navigate(-1)
  }

  const [contador, setContador] = useState(1)

  const [color, setColor] = useState('rojo')

  console.log(color)

  const agregarAlCarrito = () => {
    const itemToAdd ={
      id,
      nombre,
      portada,
      color,
      contador,
    }
    console.log(itemToAdd)
  }

    return (
<div className="card" style={{width:'18rem'}}>
  <img src={portada} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p className="card-text">{descripcion}</p>
    <small className="card-text"> cantidad disponible: {stock}</small>
    <Select
    options={options}
    onSelect={setColor}
    />
    <ItemCount stock={stock} 
    contador={contador}
    setContador={setContador}
    onAdd={agregarAlCarrito}/>
  </div>
    <hr/>
    <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
  </div>
    )
}

export default ItemDetail;