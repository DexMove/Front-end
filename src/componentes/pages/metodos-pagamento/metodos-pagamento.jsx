import Header2 from "../../Header2";
import Footer from "../../Footer";
import AccountMenu from "../../AccountMenu";
import "./metodos-pagamento.css";
import { Banknote } from "lucide-react";

// Ícone SVG para Cartão de Crédito
const CreditCardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 512 512" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" className="payment-icon">
    <path d="M0 0h512v512H0z" fill="none" />
    <rect width="416" height="320" x="48" y="96" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="56" ry="56" />
    <path fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="60" d="M48 192h416M128 300h48v20h-48z" />
  </svg>
);

// Ícone SVG para PIX
const PixIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="92" height="92" viewBox="0 0 24 24" className="payment-icon" style={{color: "rgb(99, 230, 190)"}}>
	<path d="M0 0h24v24H0z" fill="none" />
	<path fill="currentColor" d="m15.45 16.52l-3.01-3.01c-.11-.11-.24-.13-.31-.13s-.2.02-.31.13L8.8 16.53c-.34.34-.87.89-2.64.89l3.71 3.7a3 3 0 0 0 4.24 0l3.72-3.71c-.91 0-1.67-.18-2.38-.89M8.8 7.47l3.02 3.02c.08.08.2.13.31.13s.23-.05.31-.13l2.99-2.99c.71-.74 1.52-.91 2.43-.91l-3.72-3.71a3 3 0 0 0-4.24 0l-3.71 3.7c1.76 0 2.3.58 2.61.89" />
	<path fill="currentColor" d="m21.11 9.85l-2.25-2.26H17.6c-.54 0-1.08.22-1.45.61l-3 3c-.28.28-.65.42-1.02.42a1.5 1.5 0 0 1-1.02-.42L8.09 8.17c-.38-.38-.9-.6-1.45-.6H5.17l-2.29 2.3a3 3 0 0 0 0 4.24l2.29 2.3h1.48c.54 0 1.06-.22 1.45-.6l3.02-3.02c.28-.28.65-.42 1.02-.42s.74.14 1.02.42l3.01 3.01c.38.38.9.6 1.45.6h1.26l2.25-2.26a3.04 3.04 0 0 0-.02-4.29" />
</svg>


);


const paymentMethods = [
  {
    title: "Cartão de crédito",
    icon: <CreditCardIcon />,
    lines: ["Mastercard • **** 4567", "Validade 10/28"],
    actions: ["Editar", "Remover"],
  },
  {
    title: "Pix",
    icon: <PixIcon />,
    lines: ["Conta: contato@dexmove.com", "Chave cadastrada"],
    actions: ["Atualizar", "Definir como padrão"],
  },

];

export default function MetodosPagamento() {
  return (
    <main className="account-page">
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
      <div className="page page-pagamentos">
        <section className="account-hero">
          <div>
            <h1 className="pagamento-title">Métodos de pagamento</h1>
            <h2 className="pagamento-subtitle">Gerencie seus métodos de pagamento cadastrados
            </h2>
          </div>
          <button className="primary-button" type="button">
            + Adicionar método
          </button>
        </section>
        <section className="payment-grid">
          {paymentMethods.map((method) => (
            <article key={method.title} className="payment-card">
              <div className="payment-header">
                <div className="payment-icon-wrapper">
                  {method.icon}
                </div>
                <h3>{method.title}</h3>
              </div>
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
