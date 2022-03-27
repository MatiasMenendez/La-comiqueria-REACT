const comics = [
    {
      id: 1,
      nombre: 'Superior Spider-Man 1',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/e/60/5c1aa341efac3/clean.jpg",
      descripcion: '¿Spider-man u Otto Octavius, heroe o amenaza?',
    },
    {
      id: 2,
      nombre: 'Superior Spider-Man 2',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/6/e0/5c3f92d292c76/clean.jpg",
      descripcion: 'Otto se enfrenta a una amenaza cosmica proveniente de otro planeta',
    },
    {
      id: 3,
      nombre: 'Superior Spider-Man 3',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/d/20/5c6dd978dae72/clean.jpg",
      descripcion: 'Superior Spider-Man esta adquiriendo poderes.... ¿Cosmicos?',
    },
    {
      id: 4,
      nombre: 'Superior Spider-Man 4',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/f/90/5c93f48e0dbfa/clean.jpg",
      descripcion: 'Con la destruccion de San Francisco Otto tiene que demostrar ser el Superior amistoso vecino',
    },
  ]

  export const getComics = new Promise ((resolve, reject) => {
    let condition = true
    if(condition){
      setTimeout(()=>{
        resolve(comics)
      },3000)
    }else{
      reject('Error en la pagina.')
    }
    })