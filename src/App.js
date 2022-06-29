import React from 'react' 
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <div id='App'>
        <Navbar />
        <ItemListContainer />
      </div>
    </>
  );
}

export default App;
