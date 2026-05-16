
import './Header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header-box">
      <div className="header-row">
        <Link to="/" className="logo-link">
          <img src={logo} alt="logo" />
        </Link>

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

      <div className={`menu-links ${menuOpen ? 'show' : ''}`}>
        <Link onClick={() => setMenuOpen(false)} to="/">
          INÍCIO
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/sobre">
          SOBRE NÓS
        </Link>
        <Link onClick={() => setMenuOpen(false)} to="/suporte">
          SUPORTE
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
        <Link
          className="cadastro"
          onClick={() => setMenuOpen(false)}
          to="/cadastro"
        >
          CADASTRE-SE
        </Link>
      </div>
    </div>
  );
}

export default Header;
