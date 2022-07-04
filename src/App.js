import React from 'react' 
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div id='App'>
        <BrowserRouter>
        <Navbar />

        <Routes>
        <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/home' element={<ItemListContainer />}></Route>
          <Route path='/categoria/:idcategoria' element={<ItemListContainer />}></Route>
          <Route path='/item/:iditem' element={<ItemDetailContainer />}></Route>
          <Route path='*' element={<h1 id='error'>La página que buscas no se pudo encontrar 😞 ...</h1>}></Route>
        </Routes>

        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
