import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="header-box">
        <div className="header-row">
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" />
          </Link>

          <nav className={`menu-links ${menuOpen ? 'show' : ''}`}>
            <Link onClick={() => setMenuOpen(false)} to="/home">
              INÍCIO
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/fisioterapeutas">
              FISIOTERAPEUTAS
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/produtos">
              PRODUTOS
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/planos">
              VER PLANOS
            </Link>
            <Link onClick={() => setMenuOpen(false)} to="/entrar">
              ENTRAR
            </Link>

            {/* Visível só no mobile */}
            <Link className="mobile-only" onClick={() => setMenuOpen(false)} to="/suporte">
              SUPORTE
            </Link>
            <Link className="mobile-only" onClick={() => setMenuOpen(false)} to="/sobre">
              SOBRE NÓS
            </Link>

            <Link className="cadastro" onClick={() => setMenuOpen(false)} to="/bem-vindo">
              CADASTRE-SE
            </Link>
          </nav>

          <div className="header-actions">
            {/* Botão sidebar — desktop */}
            <button
              className="sidebar-toggle"
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Menu secundário"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="8" height="8" rx="1.5" />
                <rect x="13" y="3" width="8" height="8" rx="1.5" />
                <rect x="3" y="13" width="8" height="8" rx="1.5" />
                <rect x="13" y="13" width="8" height="8" rx="1.5" />
              </svg>
            </button>

            {/* Hamburguer — mobile */}
            <button
              className="menu-button"
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar deslizante */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <button
          className="sidebar-close"
          type="button"
          onClick={() => setSidebarOpen(false)}
          aria-label="Fechar"
        >
          ✕
        </button>
        <nav className="sidebar-links">
          <Link onClick={() => setSidebarOpen(false)} to="/suporte">
            SUPORTE
          </Link>
          <Link onClick={() => setSidebarOpen(false)} to="/sobre">
            SOBRE NÓS
          </Link>
        </nav>
      </aside>
    </>
  );
}

export default Header;