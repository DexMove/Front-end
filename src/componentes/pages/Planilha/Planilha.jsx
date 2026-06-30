import React, { useState, useRef } from 'react';
import './Planilha.css';
import {
  FiUploadCloud,
  FiCheckCircle,
  FiUpload,
  FiBarChart2,
  FiShield,
  FiHeadphones
} from 'react-icons/fi';
import { MdOutlineBackHand } from 'react-icons/md';
import { AiOutlineRobot } from 'react-icons/ai';
import Header2 from '../../Header2';
import Footer from '../../Footer';
import { Link } from "react-router-dom"

const Planilha = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    navigate("/controle");
    if (!selectedFile) {
      alert('Por favor, selecione uma planilha antes de enviar.');
      return;
    }

    alert(`Planilha "${selectedFile.name}" enviada com sucesso para análise!`);
  };

  return (
    <main className="planilha-container">
      <Header2 />
      {/* Seção Superior */}
      <section className="header-content">
        <h1>Conecte sua MoveHand</h1>
        <p>Para liberar o controle, conecte sua órtese ao sistema.</p>
      </section>

      {/* Ondas Decorativas */}
        <div className="onda_topo">
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
              fill="#ffffff"
              d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z"
            />
          </svg>
        </div>

      {/* Identificação */}
      <div className="planilha-id">
        <MdOutlineBackHand className="hand-icon" />

        <div className="id-text">
          <strong>MoveHand</strong>
          <span>Área de controle da sua órtese MoveHand.</span>
        </div>
      </div>

      {/* Card Principal */}
      <div className="main-card">
        <div className="upload-section">
          <h2>Envie a sua planilha</h2>

          <p>
            Arraste a sua planilha aqui ou clique para selecionar
          </p>

          <div
            className="upload-area"
            onClick={triggerFileInput}
          >
            <FiUploadCloud className="cloud-icon" />

            <p>
              Clique para selecionar formatos aceitos: .xlsx e .csv.
            </p>

            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".xlsx,.csv"
              style={{ display: 'none' }}
            />
          </div>

          {selectedFile && (
            <p className="file-name">
              Arquivo selecionado:{' '}
              <strong>{selectedFile.name}</strong>
            </p>
          )}
        </div>

        {/* Status da Análise */}
        <div className="status-card">
          <div className="status-header">
            <h3>Status de análise</h3>
          </div>

          <div className="status-body">
            <p>Documentos aguardando análise.</p>

            <p>
              Nossa equipe especializada avaliará os dados enviados
              para garantir que sua órtese seja configurada com
              segurança e precisão.
            </p>
          </div>
        </div>

        {/* Aviso Final */}
        <div className="info-box">
          <p>
            Após a aprovação da análise, a área de controle será
            liberada para você acompanhar e utilizar a órtese.
          </p>
        </div>

        {/* Botão Principal */}
        <Link to="/controle" className="btn-link-submit">
          <button
            className="btn-submit"
            onClick={handleSubmit}
          >
            <FiUpload className="submit-icon" />
            <span className="btn-submit-text">
              Enviar planilha
              <br />
              para análise
            </span>
          </button>
        </Link>
      </div>

      {/* Cards Informativos */}
      <div className="info-cards-grid">
        <div className="info-card">
          <FiBarChart2 className="card-icon" />

          <h4>Acompanhamento</h4>

          <p>
            Monitore o progresso e a evolução dos exercícios.
          </p>
        </div>

        <div className="info-card">
          <AiOutlineRobot className="card-icon" />

          <h4>Inteligência Artificial</h4>

          <p>
            A IA adapta os exercícios para melhores resultados.
          </p>
        </div>

        <div className="info-card">
          <FiShield className="card-icon" />

          <h4>Segurança</h4>

          <p>
            Seus dados estão protegidos com criptografia.
          </p>
        </div>
      </div>

      {/* Bloco de Suporte */}
      <div className="support-banner">
        <div className="support-text">
          <h5>Ainda tem dúvidas?</h5>

          <p>
            Nossa equipe de suporte está pronta para ajudar você.
          </p>
        </div>

        <Link to="/suporte" className="btn-support" style={{ textDecoration: 'none' }}>
          Falar com suporte
          <FiHeadphones className="support-icon" />
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Planilha;