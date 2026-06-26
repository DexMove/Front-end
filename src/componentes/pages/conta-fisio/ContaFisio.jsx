import { useNavigate } from "react-router-dom";
import Header2 from '../../Header2';
import Footer from '../../Footer';
import styles from "./ContaFisio.module.css";
import avatar from "../../../assets/imag/ofisio.png";
import vector16 from '../../../assets/imag/Vector16.svg';
import vector17 from '../../../assets/imag/Vector17.svg';
import vector18 from '../../../assets/imag/Vector18.svg';
import onda15 from '../../../assets/imag/Group274.svg';

 
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
      <div className={styles["cf-page"]}>
        <img src={vector16} alt="vector16" className={styles.vector16} />
        <img src={vector17} alt="vector17" className={styles.vector17} />
        <img src={vector18} alt="vector18" className={styles.vector18} />
        <img src={onda15} alt="onda1" className={styles.onda1} />
        
        <div className={styles["cf-container"]}>
 
          <h1 className={styles["cf-page-title"]}>Minha conta</h1>
          <p className={styles["cf-page-sub"]}>Aqui estão suas informações profissionais</p>
 
          {/* Card de perfil + dados profissionais */}
          <div className={styles["cf-card"]}>
            <div className={styles["cf-card-header"]}>
              <span className={styles["cf-card-label"]}>Dados profissionais</span>
              <button className={styles["cf-edit-btn"]} onClick={handleEditInfo}>
                <IconEdit /> Editar informação
              </button>
            </div>
 
            <div className={styles["cf-profile-row"]}>
              <img src={avatar} alt="Avatar Lucas Pereira" className={styles["cf-avatar"]} />
              <div className={styles["cf-profile-info"]}>
                <p className={styles["cf-name"]}>Lucas Pereira</p>
                <p className={styles["cf-role"]}>Fisioterapeuta</p>
              </div>
            </div>
 
            <div className={styles["cf-info-grid"]}>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>E-mail</span>
                <span className={styles["cf-info-val"]}>lucas.pereira@email.com</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>Telefone</span>
                <span className={styles["cf-info-val"]}>(11) 98765-4321</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>CREFITO</span>
                <span className={styles["cf-info-val"]}>123456-F</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>Especialidade</span>
                <span className={styles["cf-info-val"]}>Fisioterapia Neurológica</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>Atendimento</span>
                <span className={styles["cf-info-val"]}>Presencial e Online</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>Cidade</span>
                <span className={styles["cf-info-val"]}>São Paulo</span>
              </div>
              <div className={styles["cf-info-item"]}>
                <span className={styles["cf-info-key"]}>Estado</span>
                <span className={styles["cf-info-val"]}>SP</span>
              </div>
              <div className={`${styles["cf-info-item"]} ${styles["cf-info-item--full"]}`}>
                <span className={styles["cf-info-key"]}>Clínica/local</span>
                <span className={styles["cf-info-val"]}>Clínica Movimento - SP</span>
              </div>
              <div className={`${styles["cf-info-item"]} ${styles["cf-info-item--full"]}`}>
                <span className={styles["cf-info-key"]}>Biografia</span>
                <span className={styles["cf-info-val"]}>Fisioterapeuta com 10 anos de experiência em reabilitação neurológica.</span>
              </div>
            </div>
          </div>
 
          {/* Card de próximos agendamentos */}
          <div className={styles["cf-card"]}>
            <div className={styles["cf-card-header"]}>
              <span className={styles["cf-card-label"]}>Próximos agendamentos</span>
              <span className={styles["cf-agenda-link"]} onClick={handleGoToAgenda}>
                Ver agenda completa
              </span>
            </div>
 
            <div className={styles["cf-agenda-list"]}>
              <div className={styles["cf-agenda-item"]} onClick={handleGoToDetails}>
                <div className={styles["cf-item-meta"]}>
                  <span className={styles["cf-agenda-name"]}>Gabriel Souza</span>
                  <span className={styles["cf-agenda-date"]}>21/05/2026 - 14:00</span>
                </div>
                <div className={styles["cf-agenda-desc"]}>Avaliação inicial - Dexmove</div>
              </div>
 
              <div className={styles["cf-agenda-item"]} onClick={handleGoToAgenda}>
                <div className={styles["cf-item-meta"]}>
                  <span className={styles["cf-agenda-name"]}>Mariana Silva</span>
                  <span className={styles["cf-agenda-date"]}>21/05/2026 - 16:30</span>
                </div>
                <div className={styles["cf-agenda-desc"]}>Sessão de acompanhamento</div>
              </div>
            </div>
          </div>
 
        </div>
      </div>
      <Footer />
  </>
  );
}