
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
<<<<<<< HEAD
import Bloqueada from "./componentes/pages/bloqueada/Bloqueada";

=======
import Home from "./Home/Home";
import Sobre from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";
import Login from "./componentes/pages/Login/index";
import Cadastro_fisioterapeuta from "./componentes/pages/cadastro-fisioterapeuta/Cadastro_fisioterapeuta";
>>>>>>> db68d87dce6acd11d1750db630425cfff758e8ed
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
<<<<<<< HEAD
        <Route path="/area-bloqueada" element={<Bloqueada />} />
=======
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/entrar" element={<Login initialTab="login" />} />
        <Route path="/cadastro" element={<Login initialTab="cadastro" />} />
        <Route path="/cadastro_fisioterapeuta" element={<Cadastro_fisioterapeuta/>} />
>>>>>>> db68d87dce6acd11d1750db630425cfff758e8ed
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
