import {
  Activity,
  Battery,
  Bot,
  CheckCircle2,
  Hand,
  RefreshCw,
  Signal,
} from "lucide-react";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import Onda from "../../../assets/onda fina.png";
import "./controle.css";

const progressPoints = [
  { day: "SEG", value: 16 },
  { day: "TER", value: 31 },
  { day: "QUA", value: 39 },
  { day: "QUI", value: 50 },
  { day: "SEX", value: 47 },
  { day: "SAB", value: 52 },
  { day: "DOM", value: 63 },
];

function Controle() {
  const chartPoints = progressPoints
    .map((point, index) => `${index * 100 + 50},${118 - point.value}`)
    .join(" ");

  return (
    <main className="controle-page">
      <Header2 />

      <section className="controle-hero">
        <div className="controle-heading">
          <h1>Area de controle liberada</h1>
          <p>Dispositivo liberado e parametros ativos</p>
        </div>
        <img src={Onda} alt="" />
      </section>

      <section className="controle-device" id="movihand">
        <div className="controle-device-label">
          <Hand size={34} />
          <div>
            <h2>MoveHand</h2>
            <p>Area de controle da sua ortese MoveHand.</p>
          </div>
        </div>

        <div className="controle-shell">
          <div className="controle-status-row">
            <article>
              <span>Status da ortese</span>
              <strong>
                <CheckCircle2 size={16} />
                Conectada
              </strong>
              <small>MoveHand_7139</small>
            </article>

            <article>
              <span>Bateria</span>
              <strong>
                <Battery size={16} />
                87%
              </strong>
            </article>

            <article>
              <span>Ultima sincronizacao</span>
              <strong>Ha 2 min</strong>
            </article>

            <button type="button" aria-label="Atualizar sincronizacao">
              <RefreshCw size={18} />
            </button>
          </div>

          <div className="controle-grid">
            <section className="controle-card controle-params">
              <h3>Nivel de assistencia</h3>
              <strong>Moderada</strong>

              <h3>Forca de flexao</h3>
              <strong>60%</strong>

              <h3>Velocidade</h3>
              <strong>Media</strong>

              <p>
                Esses parametros foram definidos pelo seu fisioterapeuta e nao
                podem ser alterados.
              </p>
            </section>

            <div className="controle-stack">
              <section className="controle-card controle-exercise">
                <h3>Exercicio atual</h3>
                <strong>Reabilitacao</strong>
                <button type="button">
                  Iniciar
                  <Activity size={15} />
                </button>
              </section>

              <section className="controle-card controle-mode">
                <h3>Modo atual</h3>
                <strong>Assistido</strong>
                <div>
                  <Signal size={26} />
                  <span>Exercicio ativo sessao 3 de 5</span>
                </div>
              </section>
            </div>

            <section className="controle-card controle-ai">
              <h3>Inteligencia Artificial</h3>
              <strong>Em aprendizado continuo</strong>
              <Bot size={56} />
              <p>
                A IA esta analisando seu desempenho em tempo real e ajustando
                os exercicios para melhores resultados.
              </p>
              <a href="#progresso">Ver insights da IA</a>
            </section>
          </div>

          <section className="controle-progress" id="progresso">
            <div className="controle-progress-heading">
              <h2>Seu progresso</h2>
              <p>Acompanhe sua evolucao ao longo do tempo</p>
            </div>

            <div className="controle-metrics">
              <article>
                <span>Sessoes realizadas</span>
                <strong>12</strong>
                <small>+20% da semana anterior</small>
              </article>

              <article>
                <span>Tempo total</span>
                <strong>4h 32min</strong>
                <small>+15% da semana anterior</small>
              </article>

              <article>
                <span>Movimentos</span>
                <strong>1.248</strong>
                <small>+10% da semana anterior</small>
              </article>
            </div>

            <div className="controle-chart" aria-label="Grafico de progresso semanal">
              <svg viewBox="0 0 700 140" preserveAspectRatio="none" role="img">
                <polyline points={chartPoints} />
                {progressPoints.map((point, index) => (
                  <circle
                    key={point.day}
                    cx={index * 100 + 50}
                    cy={118 - point.value}
                    r="5"
                  />
                ))}
              </svg>

              <div className="controle-days">
                {progressPoints.map((point) => (
                  <span key={point.day}>{point.day}</span>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default Controle;
