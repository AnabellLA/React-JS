import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import imagen from './SNK.jpg';

function App() {
  return (
    <>
      <div id='App'>
        <Navbar />
      </div>
      <div id='Container'>
        <ItemListContainer product='Shingeki No Kyojin - volumen 1' price='S/ 110' Img= {imagen} />
        <ItemListContainer product='Shingeki No Kyojin - volumen 2' price='S/ 105' Img= {imagen} />
        <ItemListContainer product='Shingeki No Kyojin - volumen 3' price='S/ 100' Img= {imagen} />
        <ItemListContainer product='Shingeki No Kyojin - volumen 4' price='S/ 100' Img= {imagen} />
      </div>
    </>
  );
}

export default App;
