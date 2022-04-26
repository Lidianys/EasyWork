import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from  './view/Home.js';
import Pedidos from  './view/Pedidos.js';
import Mesero from  './view/Mesero.js';
import Chef from  './view/Chef.js';
import NotFound from './view/NotFound.js';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/mesero' element={<Mesero/>} />
        <Route path='/chef' element={<Chef/>} />
        <Route path='/pedidos' element={<Pedidos/>} />
        <Route path='/*' element={<NotFound/>} />



      </Routes>
    </BrowserRouter>
  );
}

export default App;
