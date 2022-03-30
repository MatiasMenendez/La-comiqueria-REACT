import React, {useEffect, useState} from "react";
import ComicList from "./ItemList";
import { getComics } from "../mock/fakeApi";
import { useParams } from "react-router-dom";

const ItemListContainer = ({comics}) => {

  const [listaComics, setListaComics] = useState([])
  
  const {categoriaId} = useParams()

    useEffect(()=>{
      getComics
      .then((res) => {
        if (categoriaId){
          setListaComics(res.filter((comics) => comics.categoria === categoriaId))
        } else {
          setListaComics(res)
        }
      })
      .catch((error) => console.log(error))
    }, [categoriaId])

  return(
    <div>
      <h1>{comics}</h1>
      <ComicList listaComics={listaComics}/>
    </div>
  )
}

export default ItemListContainer;