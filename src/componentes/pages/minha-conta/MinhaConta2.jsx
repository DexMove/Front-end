import "./MinhaConta.css";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import { Link } from "react-router-dom";

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconUser = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

// Dados mockados — troque por dados reais da sua API
const user = {
  nome: "Camila Souza",
  email: "camila.souza@email.com",
  idade: 28,
  peso: 65,
  diagnostico: "AVC Isquêmico",
  maoAfetada: "Direita",
  grauDificuldade: "Moderado",
  objetivo: "Recuperar movimentos finos da mão",
};

export default function MinhaConta2() {
  return (
    <main>
      <Header2 />
      <div className="mc-page">
        <div className="mc-container">

          <h1 className="mc-page-title">Minha conta</h1>
          <p className="mc-page-sub">Aqui estão suas informações</p>

          {/* Card dados do usuário */}
          <div className="mc-card">
            <div className="mc-card-header">
              <span className="mc-card-label">Informações de cadastro</span>
              <Link to="/editar-informacoes2" className="mc-edit-btn">
                <IconEdit /> Editar informações
              </Link>
            </div>
            <div className="mc-card-body">
              <div className="mc-info-row">
                <IconMail />
                <span>{user.nome}</span>
              </div>
              <div className="mc-info-row">
                <IconMail />
                <span>{user.email}</span>
              </div>
            </div>
          </div>

          {/* Card dados clínicos */}
          <div className="mc-card mc-card--patient">
            <div className="mc-card-header">
              <span className="mc-card-label">Seus dados clínicos</span>
              <Link to="/editar-paciente2" className="mc-edit-btn">
                <IconEdit /> Editar dados
              </Link>
            </div>
            <div className="mc-patient-body">
              <div className="mc-avatar">
                <IconUser />
              </div>
              <div className="mc-patient-info">
                <p className="mc-patient-name">{user.nome}</p>
                <div className="mc-patient-grid">
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Idade</span>
                    <span className="mc-patient-val">{user.idade} anos</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Peso (kg)</span>
                    <span className="mc-patient-val">{user.peso} kg</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Diagnóstico</span>
                    <span className="mc-patient-val">{user.diagnostico}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Mão afetada</span>
                    <span className="mc-patient-val">{user.maoAfetada}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Grau de dificuldade motora</span>
                    <span className="mc-patient-val">{user.grauDificuldade}</span>
                  </div>
                  <div className="mc-patient-item">
                    <span className="mc-patient-key">Principal objetivo da reabilitação</span>
                    <span className="mc-patient-val">{user.objetivo}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </main>
  );
}