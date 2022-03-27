import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;