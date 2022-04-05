import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';

function App() {



  return (
    <CartProvider>
        <BrowserRouter>
      <Navbar/>
       <Routes>
         <Route path="/" element={<ItemListContainer/>}/>
         <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
         <Route path="/detail/:itemId" element={<ItemDetailContainer/>}/>
         <Route path="/cart" element={<Cart/>}/>
         <Route path="*" element={<Navigate to="/"/>}/>
       </Routes>
      </BrowserRouter>
      </CartProvider>
  );
}

export default App;