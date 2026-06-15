import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Footer';
import Rectangle145 from '../../../assets/Rectangle 145.png';
import './bem-vindo.css';
import Header from '../../Header';

function BemVindo() {
  const [selectedType, setSelectedType] = useState(null);

  const getNavigationLink = () => {
    if (selectedType === 'patient') return '/cadastro';
    if (selectedType === 'therapist') return '/cadastro_fisioterapeuta';
    return '#';
  };

  return (

    <main className="welcome-page">
      <Header />
      <div className="welcome-container">
        <div className="welcome-content">
          <h1>Bem-vindo à Dexmove</h1>
          <p className="welcome-subtitle">Escolha como deseja utilizar a plataforma</p>

          <div className="welcome-options">
            <button
              className={`option-card ${selectedType === 'patient' ? 'selected' : ''}`}
              onClick={() => setSelectedType('patient')}
              type="button"
            >
              <div className="option-icon patient-icon">👤</div>
              <div className="option-text">
                <h3>Paciente</h3>
                <p>Utilizarei a órtese Dexmove para minha reabilitação</p>
              </div>
              <span className="option-arrow">›</span>
            </button>

            <button
              className={`option-card ${selectedType === 'therapist' ? 'selected' : ''}`}
              onClick={() => setSelectedType('therapist')}
              type="button"
            >
              <div className="option-icon therapist-icon">👨‍⚕️</div>
              <div className="option-text">
                <h3>Fisioterapeuta</h3>
                <p>Sou profissional e desejo acompanhar pacientes</p>
              </div>
              <span className="option-arrow">›</span>
            </button>
          </div>

          <Link 
            to={getNavigationLink()} 
            className={`btn-continue ${selectedType ? 'active' : ''}`}
          >
            Continuar
          </Link>
        </div>

        <div className="welcome-image">
          <img src={Rectangle145} alt="Bem-vindo à Dexmove" />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default BemVindo;
