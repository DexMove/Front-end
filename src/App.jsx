import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './componentes/ScrollToTop';
import Header from "./componentes/Header";

import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import BemVindo from "./componentes/pages/bem-vindo/bem-vindo";
import CadastroFisioterapeuta from "./componentes/pages/cadastro-fisioterapeuta/Cadastro_fisioterapeuta";
import CompletarPerfil from "./componentes/pages/complete-perfil/CompletarPerfil";
import Conecte from "./componentes/pages/conecte/conecte";
import Configuracoes from "./componentes/pages/configuracoes/configuracoes";
import Controle from "./componentes/pages/controle/controle";
import EditarInformacoes from "./componentes/pages/editar-informacoes/EditarInformacoes";
import EditarPaciente from "./componentes/pages/editar-paciente/EditarPaciente";

import Enderecos from "./componentes/pages/enderecos/enderecos";
import Fisioterapeutas from "./componentes/pages/fisioterapeutas/fisioterapeutas";
import Login from "./componentes/pages/Login/login";
import Cadastro from "./componentes/pages/Login/cadastro";
import MetodosPagamento from "./componentes/pages/metodos-pagamento/metodos-pagamento";
import MinhaConta from "./componentes/pages/minha-conta/MinhaConta";
import MinhaConta2 from "./componentes/pages/minha-conta/MinhaConta2";
import Pedidos from "./componentes/pages/pedidos/pedidos";
import Planilha from "./componentes/pages/Planilha/Planilha";
import AssistenciaOrtese from "./componentes/pages/assistiencia_ortese/Assistencia_ortese";
import SobreNos from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";
import Home from "./componentes/pages/home/Home";
import Comprar from "./componentes/pages/comprar/Comprar";
import ProdutoDetalhes from "./componentes/pages/produto-detalhes/ProdutoDetalhes";
import Agenda from "./componentes/pages/agenda/Agenda";
import ContaParcero from "./componentes/pages/conta-parcero/ContaParcero";
import DetalhesAgendamento from "./componentes/pages/detalhes-agendamento/DetalhesAgendamento";
import EditarPerfilFisio from "./componentes/pages/editar-perfil-fisio/EditarPerfilFisio";
import ContaFisio from "./componentes/pages/conta-fisio/ContaFisio";
import Bloqueada from "./componentes/pages/bloqueada/bloqueada";
import Wave from "./componentes/Wave";
import DadosProfissionais from "./componentes/pages/cadastro-fisioterapeuta/DadosProfissionais";
import EditarInformacoes2 from "./componentes/pages/editar-informacoes/editar-informações2";
import EditarPaciente2 from "./componentes/pages/editar-paciente/Editar-paciente2";
import Termos from "./componentes/pages/termos/Termos";
import AreaControle from "./componentes/pages/AreaControle";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home useHeader2={false} />} />
          <Route path="/home2" element={<Home useHeader2={true} />} />
          <Route path="/bem-vindo" element={<BemVindo />} />
          <Route path="/entrar" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/complete-perfil" element={<CompletarPerfil />} />
          <Route path="/conecte" element={<Conecte />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/controle" element={<Controle />} />
          <Route path="/area-controle" element={<AreaControle />} />
          <Route path="/editar-informacoes" element={<EditarInformacoes />} />
          <Route path="/editar-paciente" element={<EditarPaciente />} />
          <Route path="/editar-informacoes2" element={<EditarInformacoes2 />} />
          <Route path="/editar-paciente2" element={<EditarPaciente2 />} />
          <Route path="/enderecos" element={<Enderecos />} />
          <Route path="/fisioterapeutas" element={<Fisioterapeutas />} />
          <Route path="/pagamento" element={<MetodosPagamento />} />
          <Route path="/minha-conta" element={<MinhaConta />} />
          <Route path="/minha-conta2" element={<MinhaConta2 />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/planilha" element={<Planilha />} />
          <Route path="/assistencia-ortese" element={<AssistenciaOrtese />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/suporte" element={<Suporte />} />
          <Route path="/detalhes" element={<ProdutoDetalhes lado="direita" />} />
          <Route path="/comprar" element={<Comprar />} />
          <Route path="/mao-esquerda" element={<ProdutoDetalhes lado="esquerda" />} />
          <Route path="/par" element={<ProdutoDetalhes lado="par" />} />
          <Route path="/acessorio" element={<ProdutoDetalhes lado="acessorio" />} />
          <Route path="/kit" element={<ProdutoDetalhes lado="kit" />} />
          <Route path="/conta-parcero" element={<ContaParcero />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/detalhes-agendamento" element={<DetalhesAgendamento />} />
          <Route path="/editar-perfil" element={<EditarPerfilFisio />} />
          <Route path="/conta-fisio" element={<ContaFisio />} />
          <Route path="/mao-direita" element={<ProdutoDetalhes lado="direita" />} />
          <Route path="/bloqueada" element={<Bloqueada />} />
          <Route path="/cadastro-fisioterapeuta" element={<CadastroFisioterapeuta />} />
          <Route path="/wave" element={<Wave />} />
          <Route path="/dados-profissionais" element={<DadosProfissionais />} />
          <Route path="/termos" element={<Termos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
