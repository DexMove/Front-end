import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "./componentes/pages/produtos/Produtos";
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Produtos />} />
      </Routes>
    </Router>
  );
}

export default App;
