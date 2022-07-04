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
        <Navbar />
        <ItemDetailContainer />
        <ItemListContainer />
      </div>
    </>
  );
}
export default App;
