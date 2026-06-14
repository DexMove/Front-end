import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Layout';
import styles from '../css.fisio/Conta_fisio.module.css';
import avatar from '../../../assets/imag/fisio2.png';

function Conta_fisio() {
  const navigate = useNavigate();

  const handleEditInfo = () => {
    alert("Funcionalidade de edição de informações profissionais em desenvolvimento!");
  };

  const handleGoToAgenda = () => {
    navigate('/agenda');
  };

  const handleGoToDetails = () => {
    navigate('/detalhes-agendamento');
  };

  return (
    <Layout>
      <div className={styles.pagina}>
        {/* Header */}
        <div className={styles.cabecalho}>
          <h1 className={styles.titulo}>Minha conta</h1>
          <p className={styles.subtitulo}>Aqui estão suas informações profissionais</p>
        </div>

        {/* Profile Card */}
        <div className={styles.perfilBox}>
          <img src={avatar} alt="Avatar Lucas Pereira" className={styles.avatar} />
          <div className={styles.perfilInfo}>
            <h2 className={styles.nome}>Lucas Pereira</h2>
            <p className={styles.cargo}>Fisioterapeuta</p>
          </div>
          <button className={styles.btnEditar} onClick={handleEditInfo}>
            Editar informação
          </button>
        </div>

        {/* Professional Info Grid */}
        <div className={styles.infoBox}>
          <div className={styles.infoLinha}>
            <span className={styles.label}>E-mail</span>
            <span className={styles.valor}>lucas.pereira@email.com</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Telefone</span>
            <span className={styles.valor}>(11) 98765-4321</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>CREFITO</span>
            <span className={styles.valor}>123456-f</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Especialidade</span>
            <span className={styles.valor}>fisioterapia neurológica</span>
          </div>
          <div className={styles.infoLinha}>
            <span className={styles.label}>Clínica/local</span>
            <span className={styles.valor}>Clínica Movimento - SP</span>
          </div>
        </div>

        {/* Upcoming Appointments Box */}
        <div className={styles.agendaBox}>
          <div className={styles.agendaHeader}>
            <span className={styles.agendaTitulo}>Próximos agendamentos</span>
            <span className={styles.agendaLink} onClick={handleGoToAgenda}>
              Ver agenda completa.
            </span>
          </div>

          <div className={styles.agendaLista}>
            {/* Appointment 1 */}
            <div className={styles.agendaItem} onClick={handleGoToDetails}>
              <div className={styles.itemMeta}>
                <span className={styles.agendaNome}>Gabriel Souza</span>
                <span className={styles.agendaData}>21/05/2026 - 14:00</span>
              </div>
              <div className={styles.agendaDesc}>Avaliação inicial - Dexmove</div>
            </div>

            {/* Appointment 2 */}
            <div className={styles.agendaItem} onClick={handleGoToAgenda}>
              <div className={styles.itemMeta}>
                <span className={styles.agendaNome}>Mariana Silva</span>
                <span className={styles.agendaData}>21/05/2026 - 16:30</span>
              </div>
              <div className={styles.agendaDesc}>Sessão de acompanhamento</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Conta_fisio;
