import React from "react";
import Comics from "./Item"

const ComicList = ({listaComics}) =>{
    return (
    <section className="catalogo">
                 {
                     listaComics.map((item) => (
                     <Comics nombre={item.nombre} portada={item.portada} descripcion={item.descripcion} key={item.id}/>))
                 }
                </section> 
    );
};

export default ComicList;