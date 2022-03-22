import React from "react";
import {Comics} from "./Item";

const comics = [
    {
      nombre: 'Superior Spider-Man 1',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/e/60/5c1aa341efac3/clean.jpg",
      descripcion: '¿Spider-man u Otto Octavius, heroe o amenaza?',
    },
    {
      nombre: 'Superior Spider-Man 2',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/6/e0/5c3f92d292c76/clean.jpg",
      descripcion: 'Otto se enfrenta a una amenaza cosmica proveniente de otro planeta',
    },
    {
      nombre: 'Superior Spider-Man 3',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/d/20/5c6dd978dae72/clean.jpg",
      descripcion: 'Superior Spider-Man esta adquiriendo poderes.... ¿Cosmicos?',
    },
    {
      nombre: 'Superior Spider-Man 4',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/f/90/5c93f48e0dbfa/clean.jpg",
      descripcion: 'Con la destruccion de San Francisco Otto tiene que demostrar ser el Superior amistoso vecino',
    },
];



export const ComicList = () =>{
    return (
    <section className="catalogo">
                 {
                     comics.map((item) => (
                     <Comics nombre={item.nombre} portada={item.portada} descripcion={item.descripcion}/>))
                 }
                </section> 
    );
};

export default ComicList;