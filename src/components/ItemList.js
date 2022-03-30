import React from "react";
import Comics from "./Item";

const ComicList = ({listaComics}) =>{
    
    return (
    <section className="catalogo">
                 {
                     listaComics.map((item) => (
                     <Comics id={item.id} nombre={item.nombre} portada={item.portada} descripcion={item.descripcion}/>))
                 }
                </section> 
    );
};

export default ComicList;