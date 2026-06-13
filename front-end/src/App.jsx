import { BrowserRouter, Routes, Route } from "react-router-dom";

import DexMovePage from "./componentes/pages/sobre_nos/sobre_nos";
import Suporte from "./componentes/pages/suporte/suporte";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DexMovePage />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;