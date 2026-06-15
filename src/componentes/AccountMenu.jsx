import { useState } from "react";
import { Link } from "react-router-dom";
import "./AccountMenu.css";

export default function AccountMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="account-menu-wrapper">
      <button
        type="button"
        className="account-menu-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span>CS</span>
      </button>

      {open && (
        <div className="account-menu-panel">
          <div className="account-menu-header">
            <div className="account-menu-avatar">CS</div>
            <div>
              <div className="account-menu-name">Camila Souza
              </div>
            </div>
          </div>
          <Link to="/minha-conta" className="account-menu-item" onClick={() => setOpen(false)}>
            Minha conta
          </Link>
          <Link to="/pedidos" className="account-menu-item" onClick={() => setOpen(false)}>
            Meus pedidos
          </Link>
          <Link to="/enderecos" className="account-menu-item" onClick={() => setOpen(false)}>
            Endereços
          </Link>
          <Link to="/pagamento" className="account-menu-item" onClick={() => setOpen(false)}>
            Métodos de pagamento
          </Link>
          <Link to="/configuracoes" className="account-menu-item" onClick={() => setOpen(false)}>
            Configurações
          </Link>
          <button className="account-menu-logout" onClick={() => setOpen(false)}>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
