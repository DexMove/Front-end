import "./bloqueada.css"
import Header from "../../Header"
import Footer from "../../Footer"
import onda1 from "../../../assets/onda fina.png"
import onda2 from "../../../assets/onda2.png"
import bloqueada from "../../../assets/area bloqueada.png"
import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react";
import {NotepadText} from "lucide-react";
import {Bot} from "lucide-react"
import {LockKeyhole} from "lucide-react"
import {FiHeadphones} from "react-icons/fi"

function Bloqueada(){

    return(
        <main>
            <Header />
            <img src={onda1} alt="onda" className="onda-topo" />
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
                            <Link to= "/planilha" className="botao-tenho">Já tenho o dispositivo</Link>
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
                    <p>A IA adapta os exercícios para melhores resultados.</p>
                </div>
                <div className="feature-card">
                    <h3><LockKeyhole /> Segurança</h3>
                    <p>Seus dados estão protegidos com criptografia.</p>
                </div>
            </section>
            <div className="support-banner">
                    <div className="support-text">
                      <h5>Ainda tem dúvidas?</h5>

                      <p>
                        Nossa equipe de suporte está pronta para ajudar você.
                      </p>
                    </div>

                    <button className="btn-support">
                      Falar com suporte
                      <FiHeadphones className="support-icon" />
                    </button>
                  </div>

            <Footer />
        </main>
    )
}
export default Bloqueada