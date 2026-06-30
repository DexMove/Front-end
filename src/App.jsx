
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
import Assistencia_ortese from "./componentes/pages/assistiencia_ortese/Assistencia_ortese"
import Planilha from "./componentes/pages/Planilha/Planilha"
import Controle from "./componentes/pages/controle/controle"
import Fisioterapeutas from "./componentes/pages/fisioterapeutas/fisioterapeutas"
import AreaControle from './pages/AreaControle';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/assistencia_ortese" element={<Assistencia_ortese />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/suporte" element={<Suporte />} />
        <Route path="/entrar" element={<Entrar />} />
        <Route path="/area-controle" element={<AreaControle />} />
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
        <Route path="/controle" element={<Controle />} />
        <Route path="/planilha" element={<Planilha />} />
        <Route path="/fisioterapeutas" element={<Fisioterapeutas />} />
      </Routes>
    </BrowserRouter>    
  );
}
export default App;
