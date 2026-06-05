
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import Home from "./Home/Home";
import Sobre from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";
import Login from "./componentes/pages/Login/index";
import Cadastro_fisioterapeuta from "./componentes/pages/cadastro-fisioterapeuta/Cadastro_fisioterapeuta";
import Bloqueada from "./componentes/pages/bloqueada/Bloqueada";
import Conecte from "./componentes/pages/conecte/conecte";
import Parametros from "./componentes/pages/parametros/parametros";
import Controle from "./componentes/pages/controle/controle";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/entrar" element={<Login initialTab="login" />} />
        <Route path="/cadastro" element={<Login initialTab="cadastro" />} />
        <Route path="/cadastro_fisioterapeuta" element={<Cadastro_fisioterapeuta/>} />
        <Route path="/area-bloqueada" element={<Bloqueada />} />
        <Route path="/conecte" element={<Conecte />} />
        <Route path="/parametros" element={<Parametros />} />
        <Route path="/controle" element={<Controle />} />

      </Routes>
    </BrowserRouter>    
  );
}
export default App;
