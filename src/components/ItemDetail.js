import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "./ItemCount";
import Select from "./Select";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const options =[
  {value: 'Español', text:'Español'},
  {value: 'Ingles', text:'Ingles'},
]

const ItemDetail = ({id, nombre, portada, descripcion, stock, precio, categoria}) => {

  const { addItem, isInCart } = useContext(CartContext)
  

  const navigate = useNavigate ()

  const handleNavigate = () => {
    navigate(-1)
  }

  const [contador, setContador] = useState(1)
  const [idiom, setIdiom] = useState('Español')

  const agregarAlCarrito = () => {
    const itemToAdd ={
      id,
      nombre,
      portada,
      idiom,
      contador,
      precio,
      categoria,
    }
    addItem(itemToAdd)
  }


  if(stock === 0){
    return <div className="card" style={{width:'18rem'}}>
    <img src={portada} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h2 className="card-title">{nombre}</h2>
      <p className="card-text">{descripcion}</p>
      <p className="card-title">$ {precio}</p>
      <p style={{color: 'red', fontWeight: '700'}}>¡Item sin stock!</p>
      <Link to={"/"} className="btn btn-primary">Volver</Link>
      </div>
      </div>}

if(categoria === "merchandising"){
  return <div className="card" style={{width:'18rem'}}>
  <img src={portada} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p className="card-text">{descripcion}</p>
    <p className="card-title">$ {precio}</p>
    <small className="card-text"> cantidad disponible: {stock}</small>

    {
    !isInCart(id)
    ? <ItemCount stock={stock} 
    contador={contador}
    setContador={setContador}
    onAdd={agregarAlCarrito}/>
    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
    }
    </div>

    
 
    <hr/>
    <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
  </div>
}
  

    return (
<div className="card" style={{width:'18rem'}}>
  <img src={portada} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h2 className="card-title">{nombre}</h2>
    <p className="card-text">{descripcion}</p>
    <p className="card-title">$ {precio}</p>
    <small className="card-text"> cantidad disponible: {stock}</small>
  

    <Select
    options={options}
    onSelect={setIdiom}
    />

    {
    !isInCart(id)
    ? <ItemCount stock={stock} 
    contador={contador}
    setContador={setContador}
    onAdd={agregarAlCarrito}/>
    : <Link to="/cart" className="btn btn-success">Terminar mi compra</Link>
    }
    </div>

    
 
    <hr/>
    <button className="btn btn-outline-primary" onClick={handleNavigate}>Volver</button>
  </div>
    )
}

export default ItemDetail;