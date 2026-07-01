import { Link } from "react-router-dom";
import {
  BarChart3,
  Bluetooth,
  Bot,
  Headphones,
  Lock,
  Menu,
  MousePointer2,
  ShieldCheck,
} from "lucide-react";
import "./conecte.css";
import movihand from "../../../assets/direita1.png";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import Onda from "../../../assets/onda fina.png"

function Conecte() {
  return (
    <main className="conecte-page">
      <Header2 />
      <section className="conecte-hero">
        <div className="conecte-heading">
          <h1>Conecte sua MoveHand</h1>
          <p>Para liberar o controle, conecte sua ortese ao sistema.</p>
        </div>
        <img src={Onda} alt="" />
      </section>

      <section className="conecte-device" id="movihand">
        <div className="conecte-panel">
          <div className="conecte-product">
            <img src={movihand} alt="Ortese MoviHand" />
          </div>

          <div className="conecte-connect-card">
            <div className="conecte-card-title">
              <h2>Conecte sua MoveHand</h2>
              <p>Para liberar o controle, conecte sua ortese ao sistema.</p>
            </div>

            <div className="conecte-steps">
              <h3>Como conectar?</h3>
              <ol>
                <li>Ligue sua MoveHand</li>
                <li>Ative o Bluetooth do seu dispositivo</li>
                <li>Selecione sua ortese na lista abaixo</li>
              </ol>
            </div>

            <div className="conecte-list">
              <span>Dispositivos disponiveis</span>
              <button type="button" aria-label="Procurar dispositivo">
                <Bluetooth size={18} />
              </button>
            </div>

            <div className="conecte-empty">
              <strong>Nao encontrou o dispositivo?</strong>
              <span>Verifique se a ortese esta ligada e proxima do seu dispositivo.</span>
            </div>
            <Link to="/planilha">
            <button className="conecte-primary" type="button">
              Conectar dispositivo
            </button>
            </Link>
          </div>
        </div>

        <div className="conecte-feature-grid">
          <article>
            <BarChart3 size={28} />
            <div>
              <h3>Acompanhamento</h3>
              <p>Monitore o progresso e a evolucao dos exercicios.</p>
            </div>
          </article>

          <article>
            <Bot size={28} />
            <div>
              <h3>Inteligencia Artificial</h3>
              <p>A IA adapta os exercicios para melhores resultados.</p>
            </div>
          </article>

          <article>
            <ShieldCheck size={28} />
            <div>
              <h3>Seguranca</h3>
              <p>Seus dados estao protegidos com criptografia.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="conecte-help">
        <div className="duvida">
            <div>
          <h2>Ainda tem duvidas?</h2>
          <p>Nossa equipe de suporte esta pronta para ajudar voce.</p>
          </div>
          <Link to="/suporte">
          Falar com suporte
          <Headphones size={18} />
        </Link>
        </div>
        
      </section>

      < Footer />
    </main>
  );
}

export default Conecte;
