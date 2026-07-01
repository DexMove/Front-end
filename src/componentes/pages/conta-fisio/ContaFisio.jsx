import { useNavigate } from "react-router-dom";
import Header2 from '../../Header2';
import Footer from '../../Footer';
import styles from "./ContaFisio.module.css";
import avatar from "../../../assets/ofisio.png";

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

export default function ContaFisio() {
  const navigate = useNavigate();

  const handleEditInfo = () => navigate("/editar-perfil");
  const handleGoToAgenda = () => navigate("/agenda");
  const handleGoToDetails = () => navigate("/detalhes-agendamento");

  return (
    <>
      <Header2 />
      <div className={styles.cfPage}>
        <div className={styles.cfContainer}>
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
              <span className={styles.label}>Nome</span>
              <span className={styles.valor}>Lucas Pereira</span>
            </div>
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
              <span className={styles.valor}>123456-F</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Especialidade</span>
              <span className={styles.valor}>Fisioterapia Neurológica</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Atendimento</span>
              <span className={styles.valor}>Presencial e Domiciliar</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Clínica/local</span>
              <span className={styles.valor}>Clínica Movimento</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Cidade</span>
              <span className={styles.valor}>São Paulo</span>
            </div>
            <div className={styles.infoLinha}>
              <span className={styles.label}>Estado</span>
              <span className={styles.valor}>SP</span>
            </div>
            <div className={`${styles.infoLinha} ${styles.fullWidth}`}>
              <span className={styles.label}>Biografia</span>
              <span className={styles.valor}>Fisioterapeuta especialista em reabilitação neurológica com mais de 8 anos de experiência ajudando pacientes a recuperarem sua mobilidade e qualidade de vida.</span>
            </div>
          </div>

          {/* Upcoming Appointments Box */}
          <div className={styles.agendaBox}>
            <div className={styles.agendaHeader}>
              <span className={styles.agendaTitulo}>Próximos agendamentos</span>
              <button className={styles.agendaLink} onClick={handleGoToAgenda}>
                Ver agenda completa.
              </button>
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
                  <span className={styles.agendaData}>21/05/2026 - 9:30</span>
                </div>
                <div className={styles.agendaDesc}>Sessão de acompanhamento</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}