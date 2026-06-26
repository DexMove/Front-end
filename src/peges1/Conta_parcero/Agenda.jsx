import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header2 from '../../componentes/Header2';
import Footer from '../../componentes/Footer';
import styles from './Agenda.module.css';
import vector16 from '../../assets/Vector16.svg';
import vector17 from '../../assets/Vector17.svg';
import vector18 from '../../assets/Vector18.svg';
import onda1 from '../../assets/Group274.svg';

function Agenda() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('proximos');

  const appointments = {
    proximos: [
      {
        id: 1,
        datetime: '28/05/2026 - 14:00',
        name: 'Gabriel Souza',
        desc: 'Avaliação inicial - Dexmove',
        status: 'Confirmado'
      },
      {
        id: 2,
        datetime: '27/05/2025 - 09:20',
        name: 'Mariana silva',
        desc: 'Sessão de acompanhamento',
        status: 'Confirmado'
      },
      {
        id: 3,
        datetime: '22/06/2026 - 16:00',
        name: 'João Pedro',
        desc: 'Reavaliação',
        status: 'Confirmado'
      },
      {
        id: 4,
        datetime: '23/06/2026 - 10:00',
        name: 'Ana Beatriz',
        desc: 'Sessão de acompanhamento',
        status: 'Confirmado'
      }
    ],
    passados: [
      {
        id: 5,
        datetime: '10/05/2026 - 15:00',
        name: 'Carlos Santos',
        desc: 'Sessão de acompanhamento',
        status: 'Concluído'
      },
      {
        id: 6,
        datetime: '03/05/2026 - 10:00',
        name: 'Fernanda Oliveira',
        desc: 'Avaliação inicial - Dexmove',
        status: 'Concluído'
      }
    ],
    cancelados: [
      {
        id: 7,
        datetime: '15/05/2026 - 11:00',
        name: 'Roberto Lima',
        desc: 'Reavaliação',
        status: 'Cancelado'
      }
    ]
  };

  const handleCardClick = (id) => {
    // Navigate to details if the patient is Gabriel Souza (id 1)
    if (id === 1) {
      navigate('/detalhes-agendamento');
    } else {
      alert(`Visualizando detalhes do paciente: ${appointments[activeTab].find(a => a.id === id).name}`);
    }
  };

  const handleVerAgendaCompleta = () => {
    alert("Visualizando a agenda completa dos profissionais parceiros!");
  };

  return (
    <>
     <Header2 />
     <img src={onda1} alt="onda1" className={styles.onda1} />
      <div className={styles.pagina}>
                
                
        {/* Header */}
        <div className={styles.cabecalho}>
          <h1 className={styles.titulo}>Agenda</h1>
          <p className={styles.subtitulo}>Gerencie seus agendamentos</p>
        </div>

        {/* Tab Controls */}
        <div className={styles.tabsContainer}>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'proximos' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('proximos')}
          >
            Próximos
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'passados' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('passados')}
          >
            Passados
          </button>
          <button 
            className={`${styles.tabBtn} ${activeTab === 'cancelados' ? styles.activeTab : ''}`}
            onClick={() => setActiveTab('cancelados')}
          >
            Cancelados
          </button>
        </div>

        {/* Appointments List */}
        <div className={styles.agendaLista}>
          {appointments[activeTab].map((appointment) => (
            <div 
              key={appointment.id} 
              className={styles.appointmentCard}
              onClick={() => handleCardClick(appointment.id)}
            >
              <div className={styles.cardLeft}>
                <span className={styles.datetime}>{appointment.datetime}</span>
                <h3 className={styles.patientName}>{appointment.name}</h3>
                <span className={styles.description}>{appointment.desc}</span>
              </div>
              <div className={styles.cardRight}>
                <span className={`${styles.statusBadge} ${styles[appointment.status.toLowerCase()]}`}>
                  {appointment.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className={styles.footerAction}>
          <button className={styles.btnAgendaCompleta} onClick={handleVerAgendaCompleta}>
            Ver agenda completa
          </button>
        </div>
      </div>
    <Footer />
  </>
  );
}

export default Agenda;
