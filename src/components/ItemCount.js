import React, {useState} from "react";

function ItemCount ({stock, initial}) {
    const [contador, setContador] = useState(initial);

    const clickSuma =() => {
    if(initial<=stock-1){
       setContador(initial+1)
    } else{
        setContador(initial+0)
    }
    };

    const clickResta =() => {
        if(initial>=2){
           setContador(initial-1)
        } else{
            setContador(initial-0)
        }
        };

    return (<div>
        <p>Historietas de spider-man</p>
        <button type="button" className="btn btn-outline-primary" onClick={()=> clickResta()}>-</button>
        <output>{initial=contador}</output>
        <button type="button" className="btn btn-outline-primary" onClick={()=> clickSuma()}>+</button>
    </div>
    )
}

export default ItemCount;