import logo from './components/multimedia/imagen/superior1.png'
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer greeting="Futuro catalogo"/>
      <div className="firstItemCount">
      <img src={logo} alt='Cargando foto' />
        <ItemCount stock={5} />
      </div>
    </div>
  );
}

export default App;