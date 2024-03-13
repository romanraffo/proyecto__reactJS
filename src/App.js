import './App.css';
import Navbar from './components/navbar';
import { Mensaje } from './components/itemListContainer';

const AppPadre = () => {
  return(
    <Mensaje mensaje="Todos los productos disponibles proximamente..." />
  )
}

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AppPadre/>
    </div>
  );
}

export default App;
