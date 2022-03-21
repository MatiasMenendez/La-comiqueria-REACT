import React, {useState} from "react";

function ItemCount ({stock}) {
    const [contador, setContador] = useState(0);

    const addCount =() => {
    if(stock>contador){
       setContador((prevCount)=>prevCount+1)
    }
    };

    const substractCount =() => {
        if(contador>=1){
           setContador((prevCount)=>prevCount-1)
        }
        };

    return (<div>
        <p>Historietas de spider-man</p>
        <button type="button" className="btn btn-outline-primary" onClick={()=> substractCount()}>-</button>
        <output>{contador}</output>
        <button type="button" className="btn btn-outline-primary" onClick={()=> addCount()}>+</button>
    </div>
    )
}

export default ItemCount;