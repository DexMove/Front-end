
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import Home from "./Home/Home";
import Sobre from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";
import Entrar from "./componentes/pages/Login/login";
import Cadastro from "./componentes/pages/login/cadastro";
import Cadastro_fisioterapeuta from "./componentes/pages/cadastro-fisioterapeuta/Cadastro_fisioterapeuta";
import Conecte from "./componentes/pages/conecte/conecte";
import MeusPedidos from "./componentes/pages/pedidos/pedidos";
import MeusEnderecos from "./componentes/pages/enderecos/enderecos";
import MetodosPagamento from "./componentes/pages/metodos-pagamento/metodos-pagamento";
import Configuracoes from "./componentes/pages/configuracoes/configuracoes";
import BemVindo from "./componentes/pages/bem-vindo/bem-vindo";
import CompletarPerfil from "./componentes/pages/complete-perfil/CompletarPerfil";
import MinhaConta from "./componentes/pages/minha-conta/MinhaConta";
import EditarInformacoes from "./componentes/pages/editar-informacoes/EditarInformacoes";
import EditarPaciente from "./componentes/pages/editar-paciente/EditarPaciente";
import MinhaConta2 from "./componentes/pages/minha-conta2/MinhaConta2"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/cadastro_fisioterapeuta" element={<Cadastro_fisioterapeuta/>} />
        <Route path="/conecte" element={<Conecte />} />
        <Route path="/meus-pedidos" element={<MeusPedidos />} />
        <Route path="/meus-enderecos" element={<MeusEnderecos />} />
        <Route path="/metodos-pagamento" element={<MetodosPagamento />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/bem-vindo" element={<BemVindo />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/completar-perfil" element={<CompletarPerfil />} />
        <Route path="/minha-conta" element={<MinhaConta />} />
        <Route path="/editar-informacoes" element={<EditarInformacoes />} />
        <Route path="/editar-paciente" element={<EditarPaciente />} />
        <Route path="/minha-conta2" element={<MinhaConta2 />} />
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
