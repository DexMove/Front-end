import { useState } from 'react';
import './App.css';
// Chamando o componente que você criou:
import Suporte from './componentes/pages/suporte/suporte.jsx';

function App() {
  return (
    <div className="App">
      {/* Aqui a página de suporte é renderizada na tela */}
      <Suporte />
    </div>
  );
}

export default App;
