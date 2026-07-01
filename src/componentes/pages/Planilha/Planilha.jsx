import React, { useState, useRef, useEffect } from 'react';
import './Planilha.css';
import {
  UploadCloud,
  CheckCircle,
  Upload,
  BarChart2,
  Shield,
  Headphones,
  Hand,
  Bot
} from 'lucide-react';
import Header2 from '../../Header2';
import Footer from '../../Footer';
import api from '../../../services/api';
import { Link } from "react-router-dom";
const Planilha = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [statusAnalise, setStatusAnalise] = useState({ text: 'Documentos aguardando análise.', type: 'idle' });
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const file = e.dataTransfer.files[0];
    if (file) setSelectedFile(file);
  };

  const uploadFile = async () => {
    if (!selectedFile) return;

    setStatusAnalise({ text: 'Enviando documentos...', type: 'sending' });

    // Tentar obter pacienteId do localStorage / fallback para 1
    const pacienteId = localStorage.getItem('pacienteId') || 1;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await api.post(`/api/prescricoes/upload/${pacienteId}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setStatusAnalise({ text: 'Recebido com sucesso! Analisando parâmetros...', type: 'success' });
      // Notifica outras páginas (ex: Área de Controle) que uma nova planilha foi enviada
      try {
        window.dispatchEvent(new Event('planilhaUploaded'));
      } catch (e) {
        // noop
      }
    } catch (error) {
      const msg = error?.response?.data || error.message || 'Erro ao enviar documento.';
      setStatusAnalise({ text: String(msg), type: 'error' });
    }
  };

  useEffect(() => {
    if (selectedFile) {
      // Envio automático assim que o arquivo é selecionado (drop ou input)
      uploadFile();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFile]);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = () => {
    if (!selectedFile) {
      alert('Por favor, selecione uma planilha antes de enviar.');
      return;
    }

    // Permite envio manual (retry) caso necessário
    uploadFile();
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
        <Hand className="hand-icon" />

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
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadCloud className="cloud-icon" />

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
        <div className={`status-card ${statusAnalise.type === 'error' ? 'status-error' : ''}`}>
          <div className="status-header">
            <h3>Status de análise</h3>
          </div>

          <div className="status-body">
            <strong>{statusAnalise.text}</strong>

            <p>
              {statusAnalise.type === 'error'
                ? 'Houve um problema ao enviar. Verifique o arquivo e tente novamente.'
                : 'Nossa equipe especializada avaliará os dados enviados para garantir segurança e precisão.'}
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
            <Upload className="submit-icon" />
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
          <BarChart2 className="card-icon" />

          <h4>Acompanhamento</h4>

          <p>
            Monitore o progresso e a evolução dos exercícios.
          </p>
        </div>

        <div className="info-card">
          <Bot className="card-icon" />

          <h4>Inteligência Artificial</h4>

          <p>
            A IA adapta os exercícios para melhores resultados.
          </p>
        </div>

        <div className="info-card">
          <Shield className="card-icon" />

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
          <Headphones className="support-icon" />
        </Link>
      </div>
      <Footer />
    </main>
  );
};

export default Planilha;