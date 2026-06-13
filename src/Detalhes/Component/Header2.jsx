import { Link } from 'react-router-dom';
import styles from '../CSS/Header2.module.css';
import logo from '../../assets/imag/logo.png';

function Header2() {
    return (
        <header className={styles.header}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <nav className={styles.menu}>
                <ul>
                    <li><a href="/">Início</a></li>
                    <li><a href="#">Sobre Nós</a></li>
                    <li><a href="#">Suporte</a></li>
                    <li><a href="#">Produtos</a></li>
                    <li><a href="#">Ver Planos</a></li>
                    <li><a href="#">Entrar</a></li>
                </ul>
                <button className={styles.button}>Cadastre-Se</button>
                <div>
                    <Link to="/">
                        <button>voltar para home </button>
                    </Link>
                </div>
            </nav>

        </header>



    )
}
export default Header2