import { Link } from 'react-router-dom';
import Style from'../css/Header.module.css';
import logo from '../../assets/imag/logo.png';

function Header() {
  return (
    <header className={Style.header}>
        <img src={logo} alt="Logo"className={Style.logo} />
        <nav className={Style.menu}>
          <ul>
          <li><a href="/">Início</a></li>
            <li><a href="#">Sobre Nós</a></li>
            <li><a href="#">Suporte</a></li>
            <li><a href="#">Produtos</a></li>
            <li><a href="#">Ver Planos</a></li>
            <li><a href="#">Entrar</a></li>
          </ul>
<Link to="/detalhes">
<button className={Style.button}>detales</button>

</Link>
<Link to="/par">
<button className={Style.button}>par</button>
</Link>
<Link to="/mao-esquerda">
<button className={Style.button}>mao esquerda</button>
</Link>
<Link to="/conta_parcero">
<button className={Style.button}>Conta_fisio</button>
</Link>
          <button className={Style.button}>Cadastre-Se</button>
        </nav>
      
    </header>
  );
}

export default Header;