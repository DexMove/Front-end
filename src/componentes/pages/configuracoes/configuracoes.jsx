import Header2 from "../../Header2";
import Footer from "../../Footer";
import "./configuracoes.css";

const personalInfo = [
  { label: "Nome completo", value: "Bruna Almeida" },
  { label: "E-mail", value: "bruna.almeida@email.com" },
  { label: "Telefone", value: "(11) 98765-4321" },
];

const notificationSettings = [
  { label: "Ofertas e novidades", value: "Ativado" },
  { label: "E-mails de pedidos", value: "Ativado" },
  { label: "SMS", value: "Desativado" },
];

export default function Configuracoes() {
  return (
    <main className="config-page">
      <Header2 />
      <div className="onda_topo">
          <svg
            viewBox="0 0 1440 450"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#fff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>
      <div className="page page-configuracoes">
        <section className="account-hero-conf">
          <div>
            
            <h1 className="config-title">Configurações</h1>
            <h2 className="config-subtitle">
              Ajuste preferências de conta, notificações e as informações de contato.
            </h2>
          </div>
        </section>
        <section className="setting-card">
          <h2>Informações pessoais</h2>
          {personalInfo.map((item) => (
            <div key={item.label} className="setting-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>

        <section className="setting-card">
          <h2>Notificações</h2>
          {notificationSettings.map((item) => (
            <div key={item.label} className="setting-row">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
