import { useState } from "react";
import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  FileDown,
  HandHeart,
  Link2,
  MessageSquareText,
  Send,
  ShieldAlert,
} from "lucide-react";
import Header2 from "../../Header2";
import Footer from "../../Footer";
import ortese from "../../../assets/imag/Orteseaberta.png";
import ondaTeal from "../../../assets/imag/Vector1.svg";
import ondaYellow from "../../../assets/imag/Vector.svg";
import ondaWhite from "../../../assets/imag/Vector2.svg";
import "./Assistencia_ortese.css";

const orientacoes = [
  "Mantenha o punho alinhado e os dedos levemente abertos durante a execução.",
  "Evite compensações com o ombro durante o movimento.",
  "Faça a pausa recomendada entre as repetições para evitar fadiga.",
];

function Assistencia_ortese() {
  const [orientacaoAberta, setOrientacaoAberta] = useState(true);

  return (
    <div className="assistencia-page">
      <Header2 />

      <main className="assistencia-main">
        <section className="hero-area">
          <div className="hero-copy">
            <p className="hero-kicker">
              <HandHeart size={18} /> MoveHand
            </p>
            <h1>Assistente inteligente Dexmove</h1>
            <p className="hero-subtitle">
              Suporte personalizado exclusivamente nas orientações do seu fisioterapeuta
            </p>
          </div>

          <div className="hero-card">
            <div className="hero-card-text">
              <span className="hero-card-label">Monitoramento da sessão</span>
              <h2>Órtese conectada com feedback visual imediato</h2>
              <p>
                Veja o progresso, confirme os parâmetros indicados e acompanhe a
                execução com mais segurança.
              </p>
              <div className="hero-card-actions">
                <button className="secondary-action" type="button">
                  <Link2 size={18} />
                  Ver orientações
                </button>
              </div>
            </div>

            <div className="hero-card-image">
              <img src={ortese} alt="Órtese robótica Dexmove" />
            </div>
          </div>
        </section>

        <div className="wave-band" aria-hidden="true">
          <img className="wave teal" src={ondaTeal} alt="" />
          <img className="wave yellow" src={ondaYellow} alt="" />
          <img className="wave white" src={ondaWhite} alt="" />
        </div>

        <section className="card accordion-card">
          <button
            className="accordion-header"
            type="button"
            aria-expanded={orientacaoAberta}
            onClick={() => setOrientacaoAberta(!orientacaoAberta)}
          >
            <span className="accordion-icon">
              <ClipboardList size={28} />
            </span>
            <span className="accordion-copy">
              <strong>Orientação para esta sessão</strong>
              <span>Informação definida pelo seu fisioterapeuta</span>
            </span>
            <ChevronDown className={`accordion-chevron ${orientacaoAberta ? "open" : ""}`} />
          </button>

          {orientacaoAberta && (
            <div className="accordion-body">
              {orientacoes.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          )}
        </section>

        <section className="card progresso-card">
          <div className="card-topline">
            <div>
              <p className="section-label">Como você está evoluído</p>
              <h2>A IA analisa seus dados para acompanhar sua execução</h2>
            </div>

            <div className="status-pill">
              <CheckCircle2 size={18} />
              Execução dentro do parâmetro recomendado
            </div>
          </div>

          <div className="metrics-row">
            <article>
              <strong>5</strong>
              <span> Sessão realizada esta semana</span>
            </article>
            <article>
              <strong>95%</strong>
              <span> Execução correta</span>
            </article>
            <article>
              <strong>Boa</strong>
              <span> Padrão de movimentos</span>
            </article>
          </div>
        </section>

        <section className="card chat-card">
          <div className="chat-header">
            <span className="chat-icon">
              <MessageSquareText size={24} />
            </span>
            <div>
              <h2>Converse com a IA</h2>
              <p>
                Tire suas dúvidas do uso da órtese com base nas orientações do seu fisioterapeuta.
              </p>
            </div>
          </div>

          <div className="chat-bubbles">
            <div className="bubble bubble-user">
              Como devo posicionar a minha mão para esse exercício?
            </div>
            <div className="bubble bubble-ai">
              Mantenha o punho alinhado e os dedos levemente abertos. Evite compensações com o ombro
              durante o movimento.
            </div>
          </div>

          <div className="chat-input">
            <input type="text" placeholder="Digite a sua dúvida" />
            <button type="button" aria-label="Enviar pergunta">
              <Send size={18} />
            </button>
          </div>
        </section>

        <section className="bottom-grid">
          <article className="card share-card">
            <div className="share-title">
              <FileDown size={22} />
              <div>
                <h2>Acompanhe e compartilhe</h2>
                <p>Você pode exportar seu relatório de uso e mandar para o seu fisioterapeuta para acompanhamento.</p>
              </div>
            </div>

            <div className="share-actions">
              <button className="action-button primary" type="button">
                <FileDown size={18} />
                Exportar relatório
              </button>
              <button className="action-button secondary" type="button">
                <ArrowUpRight size={18} />
                Enviar para o fisioterapeuta
              </button>
            </div>
          </article>

          <article className="card importante-card">
            <div className="share-title">
              <ShieldAlert size={22} />
              <div>
                <h2>Importante</h2>
                <p>
                  A IA da Dexmove é uma ferramenta de apoio e não substitui a atuação do fisioterapeuta.
                  Em caso de dor ou desconforto, entre em contato com um profissional responsável.
                </p>
              </div>
            </div>
          </article>

          <article className="card purchase-card">
            <div>
              <p className="section-label">Reposição ou upgrade</p>
              <h2>Precisa de uma nova órtese?</h2>
              <p>
                Use o mesmo fluxo de compra da plataforma para garantir orientação e suporte durante a decisão.
              </p>
            </div>
          </article>
        </section>

        <div className="decorative-activity" aria-hidden="true">
          <Activity size={18} />
          <span>Dados sincronizados com a sessão ativa</span>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Assistencia_ortese;