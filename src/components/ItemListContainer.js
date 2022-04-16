import React, {useEffect, useState} from "react";
import ComicList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../firebase/config"

const ItemListContainer = () => {

  const [listaComics, setListaComics] = useState([])
  const [loading, setLoading] =useState(false)

  const { categoriaId } = useParams()

    useEffect( ()=>{
      setLoading(true)

      const productosRef = collection(db, "productos")
      const q = categoriaId ? query(productosRef, where('categoria', '==', categoriaId)) : productosRef

      getDocs(q)
       .then(resp => {
         const items = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
         setListaComics(items)
       })
       .finally (() => {
         setLoading(false)
       })

      }, [categoriaId])

  return(
    <>
    {
      loading
      ? <div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
      : <ComicList listaComics={listaComics}/>
    }
    </>
  )
}

export default ItemListContainer;