import Header from "../../Header";
import Footer from "../../Footer";
import AccountNav from "../account/AccountNav";
import AccountMenu from "../../AccountMenu";
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
    <main className="account-page">
      <Header />

      <div className="page page-configuracoes">
        <div className="page-topbar">
          <AccountMenu />
        </div>

        <section className="account-hero">
          <div>
            <p>Atualize suas preferências</p>
            <h1>Configurações</h1>
            <p>
              Ajuste preferências de conta, notificações e as informações de contato.
            </p>
          </div>
        </section>

        <AccountNav />

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
