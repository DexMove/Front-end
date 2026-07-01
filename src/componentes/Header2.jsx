import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Menu from "./AccountMenu";

function Header2() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className="header-box">
        <div className="header-row">
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" />
          </Link>

          <nav className="menu-links">
            <Link to="/">INÍCIO</Link>
            <Link to="/fisioterapeutas">FISIOTERAPEUTAS</Link>
            <Link to="/produtos">PRODUTOS</Link>
            <Link to="/planos">VER PLANOS</Link>
            <Link to="/bloqueada">MOVEHAND</Link>
          </nav>

          <div className="header-actions">
            <Menu />

            <button
              className="menu-button"
              type="button"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Abrir menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>

      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={() => setSidebarOpen(false)} />
      )}

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
          <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/">
            INÍCIO
          </Link>
          <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/fisioterapeutas">
            FISIOTERAPEUTAS
          </Link>
          <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/produtos">
            PRODUTOS
          </Link>
          <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/planos">
            VER PLANOS
          </Link>
          <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/bloqueada">
            MOVEHAND
          </Link>
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

export default Header2;