import React from 'react';
import './controle.css';
import MoviHand from '../../../assets/image_62.png';
import Header2 from '../../Header2';
import Footer from '../../Footer';
import { Link } from 'react-router-dom';
import { MdOutlineBackHand } from 'react-icons/md';

// --- Componentes de Ícones Auxiliares ---
const BatteryIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="1" y="6" width="18" height="12" rx="2" ry="2" />
    <line x1="23" y1="13" x2="23" y2="11" />
    <line x1="5" y1="10" x2="5" y2="14" />
    <line x1="9" y1="10" x2="9" y2="14" />
  </svg>
);

const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0B5C6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <path d="M14.5 2a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Z" />
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
  </svg>
);

const DexMovePage = () => {
  return (
    <main>
      <Header2 />
      
      <div className="dexmove-container">
        {/* Cabeçalho idêntico ao anterior */}
        <header className="controle-header">
          <h1 className="controle-title">Área de controle liberada</h1>
          <p className="controle-subtitle">Dispositivo liberado e parâmetros ativos</p>
        </header>

        {/* Onda idêntica à anterior */}
        <div className="onda_topo">
          <svg
            viewBox="0 0 1440 450"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#ffffff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>

        {/* Introdução - Agora com o ícone MdOutlineBackHand corrigido */}
        <section className="intro-section">
          <div className="planilha-id">
            <MdOutlineBackHand className="hand-icon" />
            <div className="id-text">
              <strong>MoveHand</strong>
              <span>Área de controle da sua órtese MoveHand.</span>
            </div>
          </div>
        </section>

        {/* Painel de Status */}
        <section className="status-panel">
          <div className="status-card">
            <div className="status-item">
              <span className="label">Status da órtese</span>
              <div className="value-row">
                <span className="dot-online"></span>
                <span className="status-text">Conectada</span>
              </div>
              <small>Dexmove_7f3A</small>
            </div>
            <div className="divider"></div>
            <div className="status-item">
              <span className="label">Bateria</span>
              <div className="value-row">
                <BatteryIcon />
                <span className="percentage">85%</span>
              </div>
            </div>
            <div className="divider"></div>
            <div className="status-item">
              <span className="label">Última sincronização</span>
              <div className="value-row">
                <span className="time">Hoje, 09:32</span>
              </div>
            </div>
          </div>
        </section>

        {/* Área Principal de Controle */}
        <div className="main-grid">
          {/* Card 1: Configurações */}
          <div className="control-card">
            <h3>Configurações ativas</h3>
            <div className="setting-group">
              <label>Posição Inicial</label>
              <span className="highlight-text">45°</span>
            </div>
            <div className="setting-group">
              <label>Movimento</label>
              <span className="highlight-text">77°</span>
            </div>
            <div className="setting-group">
              <label>Posição Final</label>
              <span className="highlight-text">32°</span>
            </div>
            <p className="footer-note">Definido pelo fisioterapeuta</p>
          </div>

          {/* Card 2: Exercício Atual */}
          <div className="control-card exercise-card">
            <h3>Exercício atual</h3>
            <span className="exercise-name">Reabilitação</span>
            <div className="orthosis-visual">
              <img
                src={MoviHand}
                alt="Órtese MoveHand"
                className="ortese-img"
              />
            </div>
            <div className="progress-info">
              <p>Sessão atual</p>
              <span className="progress-count">3 de 5</span>
            </div>
          </div>

          {/* Card 3: Controles */}
          <div className="control-card">
            <h3>Controle do exercício</h3>
            <p className="control-desc">Inicie ou pause seu exercício a qualquer momento.</p>
            <div className="button-group">
              <button className="btn-start">
                <span className="icon">▶</span> Iniciar exercício
              </button>
              <button className="btn-pause">
                <span className="icon">⏸</span> Pausar exercício
              </button>
            </div>
          </div>
        </div>

        {/* Assistente Inteligente */}
        <section className="ai-assistant">
          <div className="ai-card">
            <div className="ai-header">
              <BrainIcon />
              <div className="ai-title">
                <h3>Assistente inteligente Dexmove</h3>
                <p>Recomendações do fisioterapeuta e orientação da órtese com base nos dados coletados.</p>
              </div>
            </div>
            <Link to="/assistencia-ortese"className='botao'>
              <button className="btn-ai-action">
                Ver análise da IA
              </button>
            </Link>
          </div>
        </section>

        {/* Rodapé de Suporte */}
        <footer className="support-footer">
          <div className="support-content">
            <div className="support-text">
              <h4>Ainda tem dúvidas?</h4>
              <p>Nossa equipe de suporte está pronta para ajudar você.</p>
            </div>
            <Link to="/suporte" className="btn-support" style={{ textDecoration: 'none' }}>
              <span>🎧</span> Falar com suporte
            </Link>
          </div>
        </footer>
      </div>
      
      <Footer />
    </main>
  );
};

export default DexMovePage;