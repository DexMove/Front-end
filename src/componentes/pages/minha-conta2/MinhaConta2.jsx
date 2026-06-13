import { Link } from "react-router-dom";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import "./MinhaConta2.css";

const IconUser = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

const IconMail = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const IconPhone = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12 19.79 19.79 0 0 1 1.07 3.4 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6z"/>
  </svg>
);

const IconEdit = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
);

const IconActivity = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
  </svg>
);

// Dados mockados — troque por dados reais da sua API
const user = {
  nome: "Camila Souza",
  email: "Camila.sauza@email.com",
  telefone: "(11) 91234-5878",
  idade: 28,
  diagnostico: "AVC Isquêmico",
  maoAfetada: "Direita",
  grau: "Moderado",
  objetivo: "Recuperar movimentos finos da Mão",
};

export default function MinhaConta() {
  return (
    <main className="mc2-page">
      <Header2 />

      {/* ── Hero com ondas ── */}
      <section className="mc2-hero">
        <div className="mc2-hero__deco" />
        <div className="mc2-hero__deco2" />
        <div className="mc2-hero__content">
          <h1 className="mc2-hero__title">Minha conta</h1>
          <p className="mc2-hero__sub">Aqui estão suas informações</p>
        </div>
      </section>

      <div className="mc2-body">

        {/* ── Card: Dados do usuário ── */}
        <div className="mc2-card">
          <div className="mc2-card__header">
            <span className="mc2-card__label">Dados do usuário</span>
            <Link to="/editar-informacoes" className="mc2-edit-link">
              <IconEdit /> Editar minhas informações
            </Link>
          </div>

          <div className="mc2-info-row">
            <span className="mc2-info-icon"><IconUser /></span>
            <span className="mc2-info-text">{user.nome}</span>
          </div>
          <div className="mc2-info-row">
            <span className="mc2-info-icon"><IconMail /></span>
            <span className="mc2-info-text">{user.email}</span>
          </div>
          <div className="mc2-info-row">
            <span className="mc2-info-icon"><IconPhone /></span>
            <span className="mc2-info-text">{user.telefone}</span>
          </div>
        </div>

        {/* ── Card: Dados clínicos (própria pessoa) ── */}
        <div className="mc2-card">
          <div className="mc2-card__header">
            <span className="mc2-card__label">Seus dados clínicos</span>
            <Link to="/editar-paciente" className="mc2-edit-link">
              <IconEdit /> Editar dados
            </Link>
          </div>

          <div className="mc2-patient-body">
            <div className="mc2-avatar">
              <IconUser />
            </div>

            <div className="mc2-patient-info">
              <p className="mc2-patient-name">{user.nome}</p>

              <div className="mc2-patient-grid">
                <div className="mc2-patient-item">
                  <span className="mc2-patient-key">Idade</span>
                  <span className="mc2-patient-val">{user.idade} anos</span>
                </div>
                <div className="mc2-patient-item">
                  <span className="mc2-patient-key">Mão afetada</span>
                  <span className="mc2-patient-val">{user.maoAfetada}</span>
                </div>
                <div className="mc2-patient-item">
                  <span className="mc2-patient-key">Diagnóstico:</span>
                  <span className="mc2-patient-val">{user.diagnostico}</span>
                </div>
                <div className="mc2-patient-item">
                  <span className="mc2-patient-key">Objetivo:</span>
                  <span className="mc2-patient-val">{user.objetivo}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mc2-progress-hint">
            <IconActivity />
            <span>Acompanhe seu progresso na <Link to="/controle" className="mc2-link">área de controle</Link></span>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  );
}