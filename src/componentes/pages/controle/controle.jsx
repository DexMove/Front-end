import React from 'react';
import './controle.css';
import MoviHand from '../img/Movi-Hand.png'

function Controle() {
  return (
    <div>
      <img src={MoviHand} alt="Órtese" />
    </div>
  );
}


// --- Componentes de Ícones (SVG Inline para evitar dependências externas) ---
const HandIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5" />
    <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" />
    <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
    <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
  </svg>
);

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
    <div className="dexmove-container">
      {/* Cabeçalho */}
      <header className="header">
        <h1>Área de controle liberada</h1>
        <p>Dispositivo liberado e parâmetros ativos</p>
      </header>

<div className="top-wave">
  <svg
    viewBox="0 0 1440 450"
    preserveAspectRatio="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Camada 1: Azul Escuro - Começa no meio, sobe muito na esquerda e mergulha no centro */}
    <path
      fill="#0b5c6a"
      d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z"
    />

    {/* Camada 2: Laranja */}
    <path
      fill="#ffb366"
      d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z"
    />

    {/* Camada 3: Amarelo */}
    <path
      fill="#efe39b"
      d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z"
    />

    {/* Camada 4: Fundo (Cinza claro) */}
    <path
      fill="#f9f9f9"
      d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z"
    />
  </svg>
</div>

      {/* Introdução */}
      <section className="intro-section">
        <div className="intro-badge">
          <HandIcon />
          <div>
            <strong>MoveHand</strong>
            <p>Área de controle da sua órtese MoveHand.</p>
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
      <main className="main-grid">
        {/* Card 1: Configurações */}
        <div className="control-card">
          <h3>Configurações ativas</h3>
          <div className="setting-group">
            <label>Nível de assistência</label>
            <span className="highlight-text">Moderado</span>
          </div>
          <div className="setting-group">
            <label>Força de flexão</label>
            <span className="highlight-text">60%</span>
          </div>
          <div className="setting-group">
            <label>Velocidade</label>
            <span className="highlight-text">Média</span>
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
      </main>

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
          <button className="btn-ai-action">
            Ver análise da IA
          </button>
        </div>
      </section>

      {/* Rodapé de Suporte */}
      <footer className="support-footer">
        <div className="support-content">
          <div className="support-text">
            <h4>Ainda tem dúvidas?</h4>
            <p>Nossa equipe de suporte está pronta para ajudar você.</p>
          </div>
          <button className="btn-support">
            <span>🎧</span> Falar com suporte
          </button>
        </div>
      </footer>
    </div>
  );
};

export default DexMovePage;