import { Link, useLocation } from "react-router-dom";
import "./account.css";

const navItems = [
  { label: "Pedidos", path: "/meus-pedidos" },
  { label: "Meus endereços", path: "/meus-enderecos" },
  { label: "Métodos de pagamento", path: "/metodos-pagamento" },
  { label: "Configurações", path: "/configuracoes" },
];

export default function AccountNav() {
  const location = useLocation();

  return (
    <nav className="account-nav">
      {navItems.map((item) => {
        const active = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={active ? "account-link active" : "account-link"}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
