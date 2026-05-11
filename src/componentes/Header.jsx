
import './Header.css';
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Header(){
    return(
        <div id="link-header">
            <img src={logo} alt="logo" />
            <Link  to="/">INÍCIO </Link >
            <Link to="/sobre">SOBRE NÓS</Link>
            <Link to="/suporte">SUPORTE</Link>
            <Link to="/produtos">PRODUTOS</Link>
            <Link to="/planos">VER PLANOS</Link>
            <Link to="/entrar">ENTRAR</Link>
            <Link className="cadastro" to="/cadastro">CADASTRE-SE</Link>
        </div>
        
        
    )
}
export default Header;
