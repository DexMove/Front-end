import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import Home from './peges1/Home/Home';
import Detalhes from './peges1/Detalhes/Detalhes';
import Comprar from './peges1/Comprar/comprars/Comprar';
import MaoEsquerda from './peges1/Mao_esquerda/MaoEsquerda';
import ParPage from './peges1/Par/ParPage';
import Conta_parcero from "./peges1/Conta_parcero/Conta_parcero";
import Agenda from "./peges1/Conta_parcero/Agenda";
import DetalhesAgendamento from "./peges1/Conta_parcero/DetalhesAgendamento";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/" element={<Home />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/comprar" element={<Comprar />} />
        <Route path="/mao-esquerda" element={<MaoEsquerda />} />
        <Route path="/par" element={<ParPage />} />
        <Route path="/conta_parcero" element={<Conta_parcero />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/detalhes-agendamento" element={<DetalhesAgendamento />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
