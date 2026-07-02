import { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./AccountMenu.css";

export default function AccountMenu() {
  const navigate = useNavigate();
  const { logout, nomeUsuario } = useAuth();
  const [open, setOpen] = useState(false);

  const initials = useMemo(() => {
    const nome = (nomeUsuario || "").trim();
    if (!nome) return "US";
    const parts = nome.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
  }, [nomeUsuario]);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate('/entrar');
  };

  return (
    <div className="account-menu-wrapper">
      <button
        type="button"
        className="account-menu-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Abrir menu da conta"
      >
        <span>{initials}</span>
      </button>

      {open && (
        <div className="account-menu-panel">
          <div className="account-menu-header">
            <div className="account-menu-avatar">{initials}</div>
            <div>
              <div className="account-menu-name">{nomeUsuario || "Usuário"}</div>
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
          <button className="account-menu-logout" onClick={handleLogout}>
            Sair
          </button>
        </div>
      )}
    </div>
  );
}
