import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, User, Phone, Cake } from 'lucide-react';
import Layout from './Layout';
import styles from './DetalhesAgendamento.module.css';
import patientAvatar from '../../assets/imag/menino1.png';

function DetalhesAgendamento() {
  const navigate = useNavigate();

  const handleReagendar = () => {
    alert("Redirecionando para a tela de reagendamento da consulta!");
  };

  const handleVerPaciente = () => {
    alert("Visualizando a ficha clínica completa do paciente Gabriel Souza!");
  };

  return (
    <Layout>
      <div className={styles.pagina}>
        {/* Header */}
        <div className={styles.cabecalho}>
          <h1 className={styles.titulo}>Detalhes do agendamento</h1>
          <p className={styles.subtitulo}>informações da consulta.</p>
        </div>

        {/* Patient Card */}
        <div className={styles.patientCard}>
          <img src={patientAvatar} alt="Gabriel Souza" className={styles.patientAvatar} />
          <div className={styles.patientMeta}>
            <h2 className={styles.patientName}>Gabriel Souza</h2>
            
            <div className={styles.patientDetails}>
              <div className={styles.detailItem}>
                <Cake size={16} className={styles.icon} />
                <span>10 anos</span>
              </div>
              <div className={styles.detailItem}>
                <User size={16} className={styles.icon} />
                <span>Masculino</span>
              </div>
              <div className={styles.detailItem}>
                <Phone size={16} className={styles.icon} />
                <span>(11) 98765-4329</span>
              </div>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className={styles.detailsBox}>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Data:</span>
            <span className={styles.valor}>28/05/2026.</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Horário:</span>
            <span className={styles.valor}>14:00</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Tipo de consulta:</span>
            <span className={styles.valor}>Avaliação inicial</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Plano contratado:</span>
            <span className={styles.valor}>Dexmove Premium</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Local:</span>
            <span className={styles.valor}>clínica Movimento - SP.</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Observações:</span>
            <span className={styles.valor}>primeira avaliação com fase Dexmove.</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className={styles.actionButtons}>
          <button className={styles.btnReagendar} onClick={handleReagendar}>
            Reagendar
          </button>
          <button className={styles.btnVerPaciente} onClick={handleVerPaciente}>
            Ver paciente
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default DetalhesAgendamento;
