import React, {useEffect, useState} from "react";
import ComicList from "./ItemList";
import { getComics } from "../mock/fakeApi";

const ItemListContainer = ({saludo}) => {

  const [listaComics, setListaComics] = useState([])
  
    useEffect(()=>{
      getComics
      .then((res) => setListaComics(res))
      .catch((error) => console.log(error))
    }, [])

  return(
    <div>
      <h1>{saludo}</h1>
      <ComicList listaComics={listaComics}/>
    </div>
  )
}

export default ItemListContainer;