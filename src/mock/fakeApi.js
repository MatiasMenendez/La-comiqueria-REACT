const comics = [
    {
      id: 1,
      nombre: 'Superior Spider-Man 1',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/e/60/5c1aa341efac3/clean.jpg",
      descripcion: '¿Spider-man u Otto Octavius, heroe o amenaza?',
      categoria: "comics",
      stock: 15,
    },
    {
      id: 2,
      nombre: 'Superior Spider-Man 2',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/6/e0/5c3f92d292c76/clean.jpg",
      descripcion: 'Otto se enfrenta a una amenaza cosmica proveniente de otro planeta',
      categoria: "comics",
      stock: 11,
    },
    {
      id: 3,
      nombre: 'Superior Spider-Man 3',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/d/20/5c6dd978dae72/clean.jpg",
      descripcion: 'Superior Spider-Man esta adquiriendo poderes.... ¿Cosmicos?',
      categoria: "comics",
      stock: 5,
    },
    {
      id: 4,
      nombre: 'Superior Spider-Man 4',
      portada: "https://i.annihil.us/u/prod/marvel/i/mg/f/90/5c93f48e0dbfa/clean.jpg",
      descripcion: 'Con la destruccion de San Francisco Otto tiene que demostrar ser el Superior amistoso vecino',
      categoria: "comics",
      stock: 17,
    },
    {
      id: 5,
      nombre: 'Record of raknarok 1',
      portada: "https://enportadacomics.com/50695-large_default/shuumatsu-no-valkyrie-record-of-ragnarok-01.jpg",
      descripcion: 'Primer enfrentamiento entre los dioses y la humanidad',
      categoria: "manga",
      stock: 25,
    },
    {
      id: 6,
      nombre: 'Record of raknarok 2',
      portada: "https://enportadacomics.com/51278-large_default/shuumatsu-no-valkyrie-record-of-ragnarok-02.jpg",
      descripcion: 'Despues de su primer derrota la humanidad revela su mejor arma',
      categoria: "manga",
      stock: 6,
    },
    {
      id: 7,
      nombre: 'Record of raknarok 3',
      portada: "https://enportadacomics.com/52596-large_default/shuumatsu-no-valkyrie-record-of-ragnarok-03.jpg",
      descripcion: 'La esperanza esta perdida, sera este nuestro fin?',
      categoria: "manga",
      stock: 8,
    },
    {
      id: 8,
      nombre: 'Record of raknarok 4',
      portada: "https://enportadacomics.com/53466-large_default/shuumatsu-no-valkyrie-record-of-ragnarok-04.jpg",
      descripcion: 'Una nueva luz de esperanza nos alumbra',
      categoria: "manga",
      stock: 10,
    },
    {
      id: 9,
      nombre: 'Venomized Thanos',
      portada: "https://http2.mlstatic.com/D_NQ_NP_622382-MLA42907139817_072020-O.webp",
      descripcion: 'Funko pop Thanos',
      categoria: "merchandising",
      stock: 12,
    },
    {
      id: 10,
      nombre: 'Venomized X-23',
      portada: "https://http2.mlstatic.com/D_NQ_NP_2X_608734-MLA43073326533_082020-F.webp",
      descripcion: 'Funko pop X-23',
      categoria: "merchandising",
      stock: 15,
    },
    {
      id: 11,
      nombre: 'Spider-man Black suit',
      portada: "https://http2.mlstatic.com/D_NQ_NP_2X_616897-MLA49282997951_032022-F.webp",
      descripcion: 'Funko pop Spider-man',
      categoria: "merchandising",
      stock: 2,
    },
    {
      id: 12,
      nombre: 'Iron-man infinity war',
      portada: "https://http2.mlstatic.com/D_NQ_NP_2X_887765-MLA48793254272_012022-F.webp",
      descripcion: 'Funko pop Iron-man',
      categoria: "merchandising",
      stock: 3,
    },
  ]

  export const getComics = new Promise ((resolve, reject) => {
    let condition = true
    if(condition){
      setTimeout(()=>{
        resolve(comics)
      },2000)
    }else{
      reject('Error en la pagina.')
    }
    })