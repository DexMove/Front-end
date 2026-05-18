
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import Home from "./Home/Home";
import Sobre from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";
import Login from "./componentes/pages/Login/index";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/cadastro" element={<Login />} />
        <Route path="/cadastro" element={<Login />} />
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
