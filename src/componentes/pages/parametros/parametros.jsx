import { Link } from "react-router-dom";
import {
  AlertTriangle,
  BarChart3,
  Bot,
  CheckCircle2,
  Hand,
  Headphones,
  ShieldCheck,
} from "lucide-react";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import movihand from "../../../assets/direita1.png";
import Onda from "../../../assets/onda fina.png";
import "./parametros.css";

function Parametros() {
  return (
    <main className="parametros-page">
      <Header2 />

      <section className="parametros-hero">
        <div className="parametros-heading">
          <h1>Parametros do fisioterapeuta.</h1>
          <p>Dispositivo conectado, aguardando parametros.</p>
        </div>
        <img src={Onda} alt="" />
      </section>

      <section className="parametros-device" id="movihand">
        <div className="parametros-device-label">
          <Hand size={34} />
          <div>
            <h2>MoveHand</h2>
            <p>Area de controle da sua ortese MoveHand.</p>
          </div>
        </div>

        <div className="parametros-panel">
          <div className="parametros-product">
            <img src={movihand} alt="Ortese MoveHand" />

            <div className="parametros-status">
              <CheckCircle2 size={18} />
              <div>
                <strong>Dispositivo conectado</strong>
                <span>MoveHand_7139</span>
                <span>Bateria: 87%</span>
              </div>
            </div>
          </div>

          <form className="parametros-form">
            <div className="parametros-form-header">
              <h2>Defina os parametros do fisioterapeuta.</h2>
              <p>
                Para sua seguranca e melhor evolucao, os exercicios e ajustes
                serao baseados nas orientacoes do seu fisioterapeuta.
              </p>
            </div>

            <div className="parametros-card">
              <h3>Parametros prescritos.</h3>

              <div className="parametros-fields">
                <label>
                  <span>Nivel de assistencia</span>
                  <select defaultValue="moderada">
                    <option value="leve">Leve</option>
                    <option value="moderada">Moderada</option>
                    <option value="alta">Alta</option>
                  </select>
                </label>

                <label>
                  <span>Forca de flexao</span>
                  <select defaultValue="60">
                    <option value="40">40%</option>
                    <option value="60">60%</option>
                    <option value="80">80%</option>
                  </select>
                </label>

                <label>
                  <span>Velocidade</span>
                  <select defaultValue="media">
                    <option value="baixa">Baixa</option>
                    <option value="media">Media</option>
                    <option value="alta">Alta</option>
                  </select>
                </label>

                <label>
                  <span>Sessoes por dia</span>
                  <select defaultValue="2">
                    <option value="1">1 Sessao</option>
                    <option value="2">2 Sessoes</option>
                    <option value="3">3 Sessoes</option>
                  </select>
                </label>

                <label className="parametros-field-wide">
                  <span>Duracao de cada sessao</span>
                  <select defaultValue="20">
                    <option value="10">10 Minutos</option>
                    <option value="20">20 Minutos</option>
                    <option value="30">30 Minutos</option>
                  </select>
                </label>
              </div>

              <div className="parametros-warning">
                <AlertTriangle size={20} />
                <div>
                  <strong>Por que isso e importante?</strong>
                  <p>
                    Esses parametros tornam a utilizacao pelo paciente
                    personalizada e mais segura.
                  </p>
                </div>
              </div>
            </div>

            <button className="parametros-primary" type="button">
              Salvar e aplicar parametros.
            </button>
          </form>
        </div>

        <div className="parametros-feature-grid">
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

      <section className="parametros-help">
        <div className="parametros-help-box">
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

      <Footer />
    </main>
  );
}

export default Parametros;
