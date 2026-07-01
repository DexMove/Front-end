import "./bloqueada.css"
import Header from "../../Header"
import Footer from "../../Footer"
import bloqueada from "../../../assets/area bloqueada.png"
import { Link } from "react-router-dom"
import { ShoppingCart, NotepadText, Bot, LockKeyhole, Headphones } from "lucide-react";

function Bloqueada(){

    return(
        <main className="main-bl">
            <Header />
            <div className="onda_topo">
          <svg
            viewBox="0 0 1440 450"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="#0b5c6a" d="M0,250 C300,-150 1100,700 1440,250 V450 H0 Z" />
            <path fill="#ffb366" d="M0,280 C300,-120 1100,730 1440,280 V450 H0 Z" />
            <path fill="#efe39b" d="M0,310 C300,-90 1100,760 1440,310 V450 H0 Z" />
            <path fill="#fff" d="M0,340 C300,-60 1100,790 1440,340 V450 H0 Z" />
          </svg>
        </div>
            <section id="hero-bloqueada">
                <div
                    className="imagem-container"
                    style={{ backgroundImage: `url(${bloqueada})` }}
                >
                    <div className="conteudo-bloqueado">
                        <h1>Área de controle Bloqueada</h1>
                        <p>Você ainda não possui um dispositivo conectado.</p>
                        <p>Para acessar os recursos de controle, conecte sua MoveHand</p>
                        <div className="botoes-bloqueada">
                            <Link to="/produtos">
                            <button className="botao-comprar">
                                <ShoppingCart size={24} />
                                <span>Comprar a órtese</span>
                            </button>
                            </Link>
                            <Link to= "/conecte" className="botao-tenho">Já tenho o dispositivo</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="feature-card">
                    <h3><NotepadText /> Acompanhamento</h3>
                    <p>Monitore o progresso e a evolução dos exercícios.</p>
                </div>
                <div className="feature-card">
                    <h3><Bot /> Inteligência Artificial</h3>
                    <p>A IA atua como assistente inteligente durante o uso da órtese.</p>
                </div>
                <div className="feature-card">
                    <h3><LockKeyhole /> Segurança</h3>
                    <p>Seus dados estão protegidos com criptografia.</p>
                </div>
            </section>
            <div className="support-banner">
                <div className="support-text">
                    <h5>Ainda tem dúvidas?</h5>
                    <p>Nossa equipe de suporte está pronta para ajudar você.</p>
                </div>
                <Link to="/suporte" className="btn-support" style={{ textDecoration: 'none' }}>
                    Falar com suporte
                    <Headphones className="support-icon" />
                </Link>
            </div>
            <Footer />
        </main>
    )
}
export default Bloqueada