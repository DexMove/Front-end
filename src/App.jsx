import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Detalhes from './Detalhes/Detalhes';


function App() {

  return (
    <Router>
      <Routes>
        < Route path='/' element={<Home />} />
         < Route path='/detalhes' element={<Detalhes />} />
      </Routes>
    </Router>
  );
}

export default App
