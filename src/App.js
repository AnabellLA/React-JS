import React from 'react' 
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NewClient from './components/Form/UserForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart';

function App() {
  return (
        <CartProvider>
          <BrowserRouter>
          <Navbar />
          <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
            <Route path='/home' element={<ItemListContainer />}></Route>
            <Route path='/catalogo' element={<ItemListContainer />}></Route>
            <Route path='/categoria/:idcategoria' element={<ItemListContainer />}></Route>
            <Route path='/item/:iditem' element={<ItemDetailContainer />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='*' element={<h1 id='error'>La página que buscas no se pudo encontrar 😞 ...</h1>}></Route>
            <Route path='/forms' element={<NewClient/>}></Route>
          </Routes>
          </BrowserRouter>
        </CartProvider>
  );
}
export default App;
