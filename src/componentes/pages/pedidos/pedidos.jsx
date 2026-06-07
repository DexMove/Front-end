import { useState } from "react";
import "./pedidos.css";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import AccountMenu from "../../AccountMenu";
import Onda from "../../../assets/onda fina.png";
import Direita from "../../../assets/direita1.png";
import Esquerda from "../../../assets/esquerda.png";

const filters = ["Todos", "Em andamento", "Enviados", "Concluídos", "Cancelados"];

const orders = [
  {
    id: "DXM202600023",
    status: "Em andamento",
    statusClass: "andamento",
    product: "MoveHand mão direita",
    details: "Tam: M · Quantidade: 1",
    date: "20/06/2026",
    total: "R$ 2.497,00",
    progress: "18%",
    steps: [
      { label: "Pedido confirmado", date: "20/06/2026", state: "active" },
      { label: "Produção", state: "pending" },
      { label: "Envio", state: "pending" },
      { label: "Entregue", state: "pending" },
    ],
  },
  {
    id: "DXM202600024",
    status: "Em produção",
    statusClass: "producao",
    product: "MoveHand mão direita",
    details: "Tam: M · Quantidade: 1",
    date: "18/06/2026",
    total: "R$ 2.497,00",
    progress: "52%",
    steps: [
      { label: "Pedido confirmado", date: "18/06/2026", state: "done" },
      { label: "Produção", note: "Pedido em fabricação", state: "active" },
      { label: "Envio", state: "pending" },
      { label: "Entregue", state: "pending" },
    ],
  },
];

export default function MeusPedidos() {
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <main className="pedidos-page">
      <Header2 />
      <div className="pedidos-container">
        <section className="pedidos-hero">
          <div className="hero-copy">
            <img src={Onda} alt="Onda fina" />
            <h1 className="hero-badge">Meus pedidos</h1>
            <h2>Acompanhe o status de seus pedidos</h2>
            
          </div>

          <div className="hero-tabs">
            {["Todos", "Em andamento", "Enviados", "Concluídos", "Cancelados"].map(
              (filter) => (
                <button
                  key={filter}
                  className={
                    activeFilter === filter ? "tab-button active" : "tab-button"
                  }
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              )
            )}
          </div>
        </section>

        <section className="order-grid">
          {orders.map((order) => (
            <article key={order.id} className="order-card">
              <div className="order-header">
                <div className="order-thumb"><img src={Direita} alt="Mão direita" />
                </div>
                <div className="order-summary">
                  <div className="order-row">
                    <span className="order-label">Pedido #{order.id}</span>
                    <span className={`status-badge ${order.statusClass}`}>
                      {order.status}
                    </span>
                  </div>
                  <h2>{order.product}</h2>
                  <p>{order.details}</p>
                </div>
                <div className="order-meta">
                  <span>Data do pedido</span>
                  <strong>{order.date}</strong>
                  <span>Total</span>
                  <strong>{order.total}</strong>
                </div>
              </div>
              <div className="order-progress">
                <div className="progress-line">
                  <div className="progress-bar" style={{ width: order.progress }} />
                </div>
                <div className="progress-steps">
                  {order.steps.map((step) => (
                    <div key={step.label} className={`progress-step ${step.state}`}>
                      <div className="progress-step-icon">
                        {step.state === "done" ? "✓" : step.state === "active" ? "2" : ""}
                      </div>
                      <span>{step.label}</span>
                      {step.date && <small>{step.date}</small>}
                      {step.note && <small>{step.note}</small>}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      <Footer />
    </main>
  );
}