import React from "react";

function ItemCount ({stock, contador, setContador, onAdd}) {
    

    const addCount =() => {
    if(stock>contador){
       setContador((prevCount)=>prevCount+1)
    }
    };

    const substractCount =() => {
        if(contador>1){
           setContador((prevCount)=>prevCount-1)
        }
        };

    return (<div>
        <button type="button" className="btn btn-outline-primary" onClick={()=> substractCount()}>-</button>
        <span className="mx-2">{contador}</span>
        <button type="button" className="btn btn-outline-primary" onClick={()=> addCount()}>+</button>
        <br/>
        <button className="btn btn-success my-2" onClick={onAdd}>Agregar al carrito</button>
    </div>
    )
}

export default ItemCount;