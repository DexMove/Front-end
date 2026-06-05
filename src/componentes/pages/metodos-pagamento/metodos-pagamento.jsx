import Header from "../../Header";
import Footer from "../../Footer";
import AccountNav from "../account/AccountNav";
import AccountMenu from "../../AccountMenu";
import "./metodos-pagamento.css";

const paymentMethods = [
  {
    title: "Cartão de crédito",
    lines: ["Mastercard • **** 4567", "Validade 10/28"],
    actions: ["Editar", "Remover"],
  },
  {
    title: "Pix",
    lines: ["Conta: contato@dexmove.com", "Chave cadastrada"],
    actions: ["Atualizar", "Definir como padrão"],
  },
  {
    title: "Boleto bancário",
    lines: ["Pagamento à vista", "Válido por 3 dias após geração"],
    actions: ["Gerar boleto"],
  },
];

export default function MetodosPagamento() {
  return (
    <main className="account-page">
      <Header />

      <div className="page page-pagamentos">
        <div className="page-topbar">
          <AccountMenu />
        </div>

        <section className="account-hero">
          <div>
            <p>Escolha como deseja pagar</p>
            <h1>Métodos de pagamento</h1>
            <p>
              Configure seus cartões e opções de pagamento favoritas para mais
              agilidade na finalização dos pedidos.
            </p>
          </div>
          <button className="primary-button" type="button">
            + Adicionar método
          </button>
        </section>

        <AccountNav />

        <section className="payment-grid">
          {paymentMethods.map((method) => (
            <article key={method.title} className="payment-card">
              <h3>{method.title}</h3>
              {method.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <div className="address-actions">
                {method.actions.map((action) => (
                  <button key={action} type="button">
                    {action}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>

      <Footer />
    </main>
  );
}
