import Header from "../../Header";
import Footer from "../../Footer";
import AccountNav from "../account/AccountNav";
import AccountMenu from "../../AccountMenu";
import "./enderecos.css";

const addresses = [
  {
    title: "Endereço principal",
    lines: ["Rua das Palmeiras, 184", "Jardim Esperança • São Paulo, SP", "CEP 01234-567"],
    actions: ["Editar", "Remover"],
  },
  {
    title: "Segunda residência",
    lines: ["Avenida Brasil, 2200", "Vila Nova • Campinas, SP", "CEP 13022-000"],
    actions: ["Editar", "Definir como principal"],
  },
  {
    title: "Adicionar endereço",
    lines: [
      "Cadastre um endereço adicional para ganhar mais flexibilidade no momento da entrega.",
    ],
    actions: [],
  },
];

export default function MeusEnderecos() {
  return (
    <main className="account-page">
      <Header />

      <div className="page page-enderecos">
        <div className="page-topbar">
          <AccountMenu />
        </div>

        <section className="account-hero">
          <div>
            <p>Gerencie seus dados de entrega</p>
            <h1>Meus endereços</h1>
            <p>
              Veja seus endereços salvos e mantenha seu processo de compra mais rápido.
            </p>
          </div>
          <button className="primary-button" type="button">
            + Novo endereço
          </button>
        </section>

        <AccountNav />

        <section className="address-grid">
          {addresses.map((address) => (
            <article key={address.title} className="address-card">
              <h3>{address.title}</h3>
              {address.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {address.actions.length > 0 && (
                <div className="address-actions">
                  {address.actions.map((action) => (
                    <button key={action} type="button">
                      {action}
                    </button>
                  ))}
                </div>
              )}
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
