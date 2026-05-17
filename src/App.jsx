import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./componentes/Header";
import Planos from "./componentes/pages/planos/Planos";
import Produtos from "./componentes/pages/produtos/Produtos";
import Bloqueada from "./componentes/pages/bloqueada/Bloqueada";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/planos" element={<Planos />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/area-bloqueada" element={<Bloqueada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;