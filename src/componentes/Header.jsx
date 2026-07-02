import './Header.css';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';
import Menu from './AccountMenu';

function Header() {
  const { isAuthenticated, logout } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const updateHeight = () => setHeaderHeight(el.offsetHeight);
    updateHeight();

    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="header-box" ref={headerRef}>
        <div className="header-row">
          <Link to="/" className="logo-link">
            <img src={logo} alt="logo" />
          </Link>

          <nav className="menu-links">
            <Link to="/">INÍCIO</Link>
            <Link to="/fisioterapeutas">FISIOTERAPEUTAS</Link>
            <Link to="/produtos">PRODUTOS</Link>
            <Link to="/planos">VER PLANOS</Link>
            {isAuthenticated ? (
              <>
                <Link to="/bloqueada">MOVEHAND</Link>
              </>
            ) : (
              <>
                <Link to="/entrar">ENTRAR</Link>
                <Link className="cadastro" to="/bem-vindo">CADASTRE-SE</Link>
              </>
            )}
          </nav>

          <div className="header-actions">
            {isAuthenticated && <Menu />}

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

      <div style={{ height: headerHeight }} aria-hidden="true" />

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
          {isAuthenticated ? (
            <>
              <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/bloqueada">
                MOVEHAND
              </Link>
            </>
          ) : (
            <>
              <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/entrar">
                ENTRAR
              </Link>
              <Link className="sidebar-mobile-only" onClick={() => setSidebarOpen(false)} to="/bem-vindo">
                CADASTRE-SE
              </Link>
            </>
          )}
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