import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/navbar';
import { ItemListContainer } from './components/itemListContainer';
import { ItemDetailContainer } from './components/itemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Navbar/>

      <Routes>
        <Route path='/' element={ <ItemListContainer/> }/>
        <Route path='/category/:id' element={ <ItemListContainer/> }/>
        <Route path='/item/:id' element={ <ItemDetailContainer/> }/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
