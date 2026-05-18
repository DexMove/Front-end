import "./Bloqueada.css"
import Header from "../../Header"
import Footer from "../../Footer"
import onda1 from "../../../assets/onda fina.png"
import onda2 from "../../../assets/onda2.png"
import bloqueada from "../../../assets/area bloqueada.png"
import { Link } from "react-router-dom"

function Bloqueada(){
    return(
        <main>
            <Header />
            <img src={onda1} alt="onda" className="onda-topo" />
            <section id="hero-bloqueada">
                <div className="imagem-container">
                    <img src={bloqueada} alt="área bloqueada" className="imagem-bloqueada" />
                    <div className="conteudo-bloqueado">
                        <div className="icone-cadeado">🔒</div>
                        <h1>Área de controle Bloqueada</h1>
                        <p>Você ainda não possui um dispositivo conectado.</p>
                        <p>Para acessar os recursos de controle, conecte sua MoveHand</p>
                        
                        <div className="botoes-bloqueada">
                            <button className="botao-comprar">🛒 Comprar órtese</button>
                            <button className="botao-tenho">Já tenho o dispositivo</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="features">
                <div className="feature-card">
                    <h3>📋 Acompanhamento</h3>
                    <p>Monitore o progresso e a evolução dos exercícios.</p>
                </div>
                <div className="feature-card">
                    <h3>🤖 Inteligência Artificial</h3>
                    <p>A IA adapta os exercícios para melhores resultados.</p>
                </div>
                <div className="feature-card">
                    <h3>🔐 Segurança</h3>
                    <p>Seus dados estão protegidos com criptografia.</p>
                </div>
            </section>

            <section className="suporte-section">
                <h2>Ainda tem dúvidas?</h2>
                <p>Nossa equipe de suporte está pronta para ajudar você</p>
                <button className="botao-suporte">🎧 Falar com Suporte</button>
            </section>

            <Footer />
        </main>
    )
}
export default Bloqueada