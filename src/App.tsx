import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import ListaCategorias from './components/listaCategorias/ListaCategorias';
import FormularioCategoria from './components/categorias/formularioCategoria/FormuarioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[77.5vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}
export default App;