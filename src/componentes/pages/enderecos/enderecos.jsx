import Header2 from "../../Header2";
import Footer from "../../Footer";
import "./enderecos.css";
import Onda from "../../../assets/onda fina.png";


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
      <Header2 />

      <div className="page page-enderecos">
        <section className="account-hero">
            <img src={Onda} alt="Onda fina" />
            <h1 className="hero-badge">Meus endereços</h1>
            <h2>Gerencie seus endereços de entrega</h2>
            <button className="primary-button" type="button">
              + Novo endereço
            </button>
        </section>

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
